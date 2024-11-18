import Task from "./Task";
import "../styles/main.css"
import { useAppContext } from "../contexts/TaskManagerContext";
import { useState } from "react";
import NoTasks from "./NoTasks"
import { useSelector } from "react-redux";

export default function ListTask() {
    const listTasks = useSelector((state) => state.tasks.listTasks);

    const [ position, setPosition ] = useState({ x: 0, y: 0 });
    const [ draggedTask, setDraggedTask ] = useState(0);
    const [ currDraggedTask, setCurrDraggedTask ] = useState(0);

    return (
        <div id="list-task-container" className="list-task-container">
            { 
                listTasks.length == 0 ? <NoTasks></NoTasks> :
                    listTasks.map((elem) => (
                        <Task 
                            title={ elem.title } 
                            description={ elem.description }
                            id={ elem.id } 
                            position={ position }
                            setPosition={ setPosition }
                            draggedTask={ draggedTask }
                            setDraggedTask={ setDraggedTask }
                            currDraggedTask={ currDraggedTask } 
                            setCurrDraggedTask={ setCurrDraggedTask }
                            key={ elem.id }>
                        </Task>
                    ))
            }
        </div>
    );
}