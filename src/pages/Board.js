import React, {useEffect, useState} from 'react';
import {createUseStyles} from "react-jss";
import {ComponentStyles} from "../components/ComponentStyles";
import {useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {ACTION_TYPES, useStateContext} from "../state/StateContext";
import TaskElement from "../components/TaskElement/TaskElement";
import Loader from '../assets/Pulse-1s-200px.svg'
import NewTaskElement from "../components/NewTaskElement/NewTaskElement";

const styles = createUseStyles(ComponentStyles)

function Board(props) {
    const {boardId} = useParams()
    const {state: {user}} = useStateContext()
    const [tasks, setTasks] = useState([])
    const [showTodoTaskArea, setShowTodoTaskArea] = useState(false)
    const [showDoingTaskArea, setShowDoingTaskArea] = useState(false)
    const [showDoneTaskArea, setShowDoneTaskArea] = useState(false)
    const todoTasks = tasks?.filter(task => task.status === 'todo')
    const doingTasks = tasks?.filter(task => task.status === 'doing')
    const doneTasks = tasks?.filter(task => task.status === 'done')
    const {dataEditMethods} = useFetch()
    const taskDeleteHandler = (id) => {
        setTasks(prev => prev.filter(task => task.taskId !== id))
    }
    const handleStatusChange = (newStatus, id) => {
        dataEditMethods()
        setTasks(prevTasks => prevTasks.map(task => task.taskId == id ? {...task, status: newStatus} : task))

    }

    const submitHandler = (newTask) => {
        dataEditMethods(`https://5d98263861c84c00147d6d97.mockapi.io/users/${user.id}/boards/${boardId}/tasks`,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(newTask)
        })
        const newObj = {...newTask, taskId:Math.random() * 10}
        setTasks(prev => [...prev,newObj])
    }


    const {
        data,
        isLoading,
        error
    } = useFetch(`https://5d98263861c84c00147d6d97.mockapi.io/users/${user.id}/boards/${boardId}/tasks`)

    useEffect(() => {
        setTasks(data)
    }, [data])

    const classes = styles()
    return (
        <div className={classes.boardContainer}>
            {
                isLoading ? <img src={Loader} alt="" className={classes.loader}/> : (
                    <>
                        <div className={classes.column}>
                            {todoTasks?.map(task => <TaskElement key={task.taskId}
                                                                 handleStatusChange={handleStatusChange}
                                                                 taskDeleteHandler={taskDeleteHandler}
                                                                 description={task.description} status={task.status}
                                                                 id={task.taskId} title={task.title}/>)}
                            {showTodoTaskArea ?
                                <NewTaskElement boardId={boardId} upComingStatus='todo' submitHandler={submitHandler}
                                                cancelHandler={setShowTodoTaskArea}/> :
                                <button onClick={() => setShowTodoTaskArea(true)}>Add</button>}
                        </div>
                        <div className={classes.column}>
                            {doingTasks?.map(task => <TaskElement key={task.taskId}
                                                                  handleStatusChange={handleStatusChange}
                                                                  taskDeleteHandler={taskDeleteHandler}
                                                                  description={task.description} status={task.status}
                                                                  id={task.taskId} title={task.title}/>)}
                            {showDoingTaskArea ?
                                <NewTaskElement boardId={boardId} upComingStatus='doing' submitHandler={submitHandler}
                                                cancelHandler={setShowDoingTaskArea}/> :
                                <button onClick={() => setShowDoingTaskArea(true)}>Add</button>}
                        </div>
                        <div className={classes.column}>
                            {doneTasks?.map(task => <TaskElement key={task.taskId}
                                                                 handleStatusChange={handleStatusChange}
                                                                 taskDeleteHandler={taskDeleteHandler}
                                                                 description={task.description} status={task.status}
                                                                 id={task.taskId} title={task.title}/>)}
                            {showDoneTaskArea ?
                                <NewTaskElement boardId={boardId} upComingStatus='done' submitHandler={submitHandler}
                                                cancelHandler={setShowDoneTaskArea}/> :
                                <button onClick={() => setShowDoneTaskArea(true)}>Add</button>}
                        </div>
                    </>)
            }
        </div>
    )
}

export default Board;