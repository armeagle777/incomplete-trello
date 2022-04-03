import React, {useEffect, useState} from 'react';
import {createUseStyles} from "react-jss";
import {ComponentStyles} from "../ComponentStyles";
import {localLogger} from "../../helpers/localLogger";
import {useStateContext} from "../../state/StateContext";
import useFetch from "../../hooks/useFetch";
import {useParams} from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const styles = createUseStyles(ComponentStyles)

function TaskElement({id, title,description, status,handleStatusChange, taskDeleteHandler}) {
    const [shouldBeChanged, setShouldBeChanged] = useState(null)
    const [newStatus, setNewStatus] = useState('')
    const {state: {user}} = useStateContext()
    const {boardId} = useParams()
    const classes = styles()
    const newUrl = `https://5d98263861c84c00147d6d97.mockapi.io/users/${user.id}/boards/${boardId}/tasks/${id}`
    const {dataEditMethods} = useFetch()

    const handleChangeStatus =(newwStatus, elementId) =>{
        setNewStatus(newwStatus)
        setShouldBeChanged('editStatus')
    }



    useEffect(() => {
        if (shouldBeChanged ==='delete') {
            dataEditMethods(newUrl, {method: 'DELETE'})
            taskDeleteHandler(id)
        }else if(shouldBeChanged === 'editStatus'){
            const changedObj = {status:newStatus}
            handleStatusChange(newStatus,id)
            dataEditMethods(newUrl, {method:"PUT",headers:{'Content-Type': 'application/json'},body: JSON.stringify(changedObj)})
        }

    }, [shouldBeChanged])
    return (
        <div className={classes.taskCard}>
            <button onClick={() => {
                setShouldBeChanged('delete')
            }} className={classes.deleteButton}>&times;</button>
            <p> {title}</p>
            <p> {description}</p>
            <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
                <Select
                    id="demo-simple-select-standard"
                    value={status}
                    onChange={(ev)=>handleChangeStatus(ev.target.value,id)}
                >
                    <MenuItem value='todo'>ToDO</MenuItem>
                    <MenuItem value='doing'>Doing</MenuItem>
                    <MenuItem value='done'>Done</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default TaskElement;