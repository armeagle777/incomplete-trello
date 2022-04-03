import React, {useState} from 'react';
import {createUseStyles} from "react-jss";
import {ComponentStyles} from "../ComponentStyles";

const styles = createUseStyles(ComponentStyles)

function NewTaskElement({submitHandler, cancelHandler,upComingStatus, boardId}) {
    const [titleValue, setTitleValue] = useState('')
    const [descrValue, setDescrValue] = useState('')
    const classes = styles()
    const onSubmit =()=>{
        if(titleValue.length > 0 && descrValue.length > 0){
            submitHandler({description:descrValue,title:titleValue,boardId: boardId, status:upComingStatus})
            setTitleValue('')
            setDescrValue('')
        }
    }
    return (
        <div className={classes.newTaskContainer}>
            <input className={classes.newTaskTitle} onChange={(e)=>setTitleValue(e.target.value)} type="text" placeholder='Title' value={titleValue} />
            <textarea className={classes.textarea} onChange={(e)=>setDescrValue(e.target.value)} placeholder='Description...' value={descrValue}></textarea>

            <div className={classes.buttonRow}>
                <button onClick={onSubmit}>Add task</button>
                <button onClick={()=>cancelHandler(false)}>&times;</button>
            </div>
        </div>
    );
}

export default NewTaskElement;