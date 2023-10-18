import React, {ReactElement, useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux";
import {deleteTodo, retrieveTodos} from "../redux/todo/todoSlice";
import { AppDispatch } from "../redux/store";
import {ITask} from "../redux/types/Task";

const TaskList = (): ReactElement => {
    const tasks = useSelector((state: any) => state.todo.tasks);
    const dispatch = useDispatch<AppDispatch>();
    const [loading, setLoading] = useState(true);

    const handleDelete = (id: string) => {
        dispatch(deleteTodo(id));
    }

    useEffect(() => {
        dispatch(retrieveTodos())
            .then(() => {
                setLoading(false);
            })
    },[dispatch])

    return(
        <div className="tasklist">
            <div className="display-tasks">
                <h3>Your tasks:</h3>
                {loading ? <p>...loading</p>:(
                <ul className="tasks">
                    {tasks.map((task: ITask) => (
                        <li className="task" key={task.id}>
                            {task.text}
                            <button
                                className="delete-btn"
                                onClick={() => handleDelete(task.id)}
                            >
                                delete
                            </button>
                        </li>
                    ))}
                </ul>)}
            </div>
        </div>
    )
}

export {TaskList}