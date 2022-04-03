import React, {useState} from 'react';
import {useStateContext} from "../state/StateContext";
import BoardCard from "../components/BoardCard/BoardCard";
import {createUseStyles} from "react-jss";
import {ComponentStyles} from "../components/ComponentStyles";
import NewBoardElement from "../components/NewBoardElement/NewBoardElement";
const styles= createUseStyles(ComponentStyles)

function Boards(props) {
    const [showNewBoardElement, setShowNewBoardElement] = useState(true)
    const classes = styles()
    const {state:{boards} } = useStateContext()

    return (
        <div className={classes.boardsContainer}>
            <h4>YOUR WORKSPACES</h4>
            {boards.map(board=> <BoardCard key={board.boardId} boardId={board.boardId}  title={board.boardName} />)}
            {showNewBoardElement ? <NewBoardElement  cancelHandler={setShowNewBoardElement} /> : <button onClick={()=>setShowNewBoardElement(true)}>Add Board</button> }
        </div>
    );
}

export default Boards;