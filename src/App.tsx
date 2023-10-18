import { ReactElement } from 'react';
import Task from "./Components/Task";
import {TaskList} from "./Components/TaskList";

const App = (): ReactElement => {
  return (
    <>
      <h1>Todo App</h1>
        <Task />
        <TaskList />
    </>
  );
}

export default App;
