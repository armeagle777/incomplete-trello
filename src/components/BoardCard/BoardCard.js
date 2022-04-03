import React from 'react';
import {createUseStyles} from 'react-jss'
import {ComponentStyles} from "../ComponentStyles";
import {NavLink} from "react-router-dom";
import {useStateContext} from "../../state/StateContext";

const styles = createUseStyles(ComponentStyles)

function BoardCard({title,boardId}) {

    const {state:{user}}= useStateContext()
    const classes = styles()

    return (
        <NavLink className={classes.boardCardContainer} to={'/'+ user.userName+ '/'+boardId}>
            {title}
            <button className={classes.navlinkCloser}>&times;</button>
        </NavLink>
    );
}

export default BoardCard;