import React, {Component} from 'react';
import './App.css';

import Login from "./pages/Login";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import PersonalPage from "./pages/PersonalPage";
import Boards from "./pages/Boards";
import Profile from "./pages/Profile";
import {StateProvider} from "./state/StateContext";
import RequireAuth from "./hocs/RequireAuth";
import Board from "./pages/Board";

function App() {
    return (
        <StateProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/:username' element={<RequireAuth><PersonalPage/></RequireAuth>}>
                        <Route index element={<Profile/>}/>
                        <Route path='boards' element={<Boards/>}/>
                        <Route path=':boardId' element={<Board />} />
                    </Route>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </StateProvider>
    )
}

export default App;
