import {createContext, useContext, useReducer, useState} from "react"
import {localLogger} from "../helpers/localLogger";

export const ACTION_TYPES = {
    LOGIN: 'LOGIN',
    LOG_OUT: 'LOG_OUT',
    SET_BOARDS: 'SET_BOARDS',
    SET_TASKS: 'SET_TASKS',
}
const userData = JSON.parse(sessionStorage.getItem('userName'))
const boradData = JSON.parse(sessionStorage.getItem('boards'))
const StateContext = createContext(null)
const initialState = {
    isLogedIn: !!userData,
    user: userData,
    boards: boradData,
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.LOGIN: {
            const {userInfo, boarads} = action
            localLogger.localLogin(userInfo)
            return {...state, isLogedIn: true, user: userInfo, boards: boarads}
        }
        case ACTION_TYPES.LOG_OUT: {
            localLogger.localLogout()
            return {...state, isLogedIn: false, user: null}
        }
        case ACTION_TYPES.SET_BOARDS: {
            return {...state, boards: [...state.boards,action.newBoard]}
        }

        default :
            return state
    }
}
export const StateProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <StateContext.Provider value={{state, dispatch}}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext)