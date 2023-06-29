import { useState } from "react";
import addData from "../../../public/taskList.json";

const TaskItem = () => {
  const [data, setData] = useState(addData);
  const [newName, setNewName] = useState("");
  const [newTask, setNewTask] = useState("");

  const addTask = (name, task) => {
    const newId = Math.max(...data.map((item) => item.id)) + 1;
    const newTask = { id: newId, name, task };
    setData([...data, newTask]);
  };

  const deleteTask = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== "" && newName.trim() !== "") {
      addTask(newName, newTask);
      setNewTask("");
      setNewName("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add a Task</h2>
        <input
          type="text"
          value={newName}
          onChange={handleNameChange}
          placeholder="Name task"
        />
        <input
          type="text"
          value={newTask}
          onChange={handleTaskChange}
          placeholder="New task"
        />
        <button type="submit">Add</button>
      </form>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.task}</p>
          <button onClick={() => deleteTask(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskItem;

// import { useState } from "react";
// import tasksData from "../../tasks.json";

// const TaskItem = () => {
//   const [data, setData] = useState(tasksData);
//   const [newName, setNewName] = useState("");
//   const [newTask, setNewTask] = useState("");

//   const addTask = (name, task) => {
//     const newId = Math.max(...data.map(item => item.id)) + 1;
//     const newTask = { id: newId, name, task };
//     setData([...data, newTask]);
//   };

//   const handleNameChange = (event) => {
//     setNewName(event.target.value);
//   };

//   const handleTaskChange = (event) => {
//     setNewTask(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (newTask.trim() !== "" && newName.trim() !== "") {
//       addTask(newName, newTask);
//       setNewTask("");
//       setNewName("");
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={newName} onChange={handleNameChange} placeholder="Name task" />
//         <input type="text" value={newTask} onChange={handleTaskChange} placeholder="New task" />
//         <button type="submit">Add</button>
//       </form>
//       {data.map((item) => (
//         <div key={item.id}>
//           <h2>{item.name}</h2>
//           <p>{item.task}</p>
//           {/* add button: update or delete */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TaskItem;
