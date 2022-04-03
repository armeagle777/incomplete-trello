import React from 'react';
import {createUseStyles} from "react-jss";
import {pagesStyles} from "./pagesStyles";
import {NavLink} from "react-router-dom";

const customStyles = createUseStyles(pagesStyles)


function Home(props) {

    const classes = customStyles()

    return (
        <div className='homepageContainer'>
            <header>
                <nav className={classes.navigation}>
                    <NavLink to='/login' className={classes.navigationLink}>Login</NavLink>
                </nav>
            </header>
        </div>
    );
}

export default Home;