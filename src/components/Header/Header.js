import {createUseStyles} from "react-jss";
import {pagesStyles} from "../../pages/pagesStyles";

const customStyles = createUseStyles(pagesStyles)
import React from 'react';
import {NavLink} from "react-router-dom";
import {Avatar} from "@mui/material";
import {useStateContext} from "../../state/StateContext";

function Header(props) {
    const {state:{user}, dispatch} = useStateContext()
    const classes = customStyles()
    return (
        <div className={classes.headerContainer}>
            <nav className={classes.navContainer}>
                <NavLink to='' className={classes.navigationLinks}>Profile</NavLink>
                <NavLink to='boards' className={classes.navigationLinks}>Boards</NavLink>
                <button onClick={()=>dispatch({type:'LOG_OUT'})}>Logout</button>
            </nav>
            <Avatar
                sx={{bgcolor: '#ccc'}}
                alt="Remy Sharp"
                src={user?.avatar ? user.avatar : "/broken-image.jpg"}
            />
        </div>
    );
}

export default Header;