import React from 'react'
import {useParams} from "react-router-dom"
import Header from "../components/Header/Header";
import {Outlet} from "react-router-dom";

function PersonalPage(props) {
    const {username} = useParams()

    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
}

export default PersonalPage;