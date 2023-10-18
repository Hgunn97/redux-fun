import {ReactElement, useRef} from "react"
import {useDispatch} from "react-redux";
import {createTodo} from "../redux/todo/todoSlice";
import {AppDispatch} from "../redux/store";

const Task = (): ReactElement => {
    const dispatch = useDispatch<AppDispatch>();
    const inputRef = useRef<HTMLInputElement | null>(null);

    async function addNewTask() {
        if(inputRef.current) {
            const task = inputRef.current.value.trim();
            console.log("My value: " + task);
            if (task !== "") {
                const resultAction = await dispatch(createTodo(task))

                if(createTodo.fulfilled.match(resultAction)){
                    inputRef.current.value = "";
                }
            }
        }
    }

    return (
        <div className="task-component">
            <div className="add-task">
                <input
                    type="text"
                    placeholder="Add task here..."
                    ref={inputRef}
                    className="taskInput"
                />
                <button onClick={addNewTask}>Add task</button>
            </div>
        </div>
    );
};

export default Task;