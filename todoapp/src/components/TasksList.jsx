import { useRef, useState } from "react";

export function TasksList() {
  const [tasks, setTasks] = useState([]);
  const titleRef = useRef(null);

  const handleAddTask = () => {
    const newTasks = [...tasks];
    newTasks.push({
      title: titleRef.current.value,
      description: "Lorem ipsum X",
      completed: false,
    });
    setTasks(newTasks);
  };

  const handleToggleTaskState = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <>
      <input type="text" id="title" ref={titleRef} />
      <button onClick={handleAddTask}>AddNewTask</button>
      {tasks.length == 0 ? (
        <div>Empty Tasks List</div>
      ) : (
        <ul>
          {tasks.map(({ title, completed }, index) => {
            return (
              <>
                <li
                  key={index}
                  style={{
                    textDecoration: completed ? "line-through" : "none",
                  }}
                >
                  {title}
                </li>
                <button onClick={() => handleToggleTaskState(index)}>
                  {completed ? "Undo" : "Complete"}
                </button>
                <button onClick={() => handleDeleteTask(index)}>Delete</button>
              </>
            );
          })}
        </ul>
      )}
    </>
  );
}
