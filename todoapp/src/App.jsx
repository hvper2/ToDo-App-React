import './App.css';
import { tasks as tasksData} from './data/tasks';
import { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState(tasksData)
    const handleDeleteTask = (index) => {
        const newTasks = [... tasks];
        newTasks.splice(index , 1);
        setTasks(newTasks);
    }
  
    return(
        <div>
            <ul>
            {tasks.map((task,index) =>{
                return (
                    <>
                    <li key={index}>{task.title}</li>
                    <button onClick={() => handleDeleteTask(index)}>X</button>
                    </>
                )
            }
            )}
            </ul>
        </div>
  )
}

export default App;
