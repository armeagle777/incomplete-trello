import React, {useEffect, useRef, useState} from 'react';
import {createUseStyles} from "react-jss";
import {ComponentStyles} from "../ComponentStyles";
import useFetch from "../../hooks/useFetch";
import {ACTION_TYPES, useStateContext} from "../../state/StateContext";

const styles = createUseStyles(ComponentStyles)

function NewTaskElement({ cancelHandler}) {

    const [titleValue, setTitleValue] = useState('')
    const classes = styles()
    const {dataEditMethods, data, isLoading} = useFetch()
    const {dispatch} = useStateContext()
    useEffect(()=>{
        if(data?.boardId){
            dispatch({type:ACTION_TYPES.SET_BOARDS,newBoard:data })
        }
    },[data])

    const onSubmit = () => {
        if (titleValue.length > 0 ) {
            setTitleValue('')
            dataEditMethods(`https://5d98263861c84c00147d6d97.mockapi.io/users/1/boards`,{
                method:'POST',
                headers:{
                    'Content-type': 'application/json'
                },
                body:JSON.stringify({title: titleValue})
            })
        }

    }
    return (
        <div className={classes.newTaskContainer}>
            <input className={classes.newTaskTitle} onChange={(e) => setTitleValue(e.target.value)} type="text"
                   placeholder='Title' value={titleValue}/>
            <div className={classes.buttonRow}>
                <button onClick={onSubmit} disabled={isLoading}>Add task</button>
                <button onClick={() => cancelHandler(false)}>&times;</button>
            </div>
        </div>
    );
}

export default NewTaskElement;