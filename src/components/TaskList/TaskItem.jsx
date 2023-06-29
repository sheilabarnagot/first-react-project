import { useEffect, useState } from "react";
import TaskLoop from "./TaskLoop";
// import TaskAdder from "./TaskAdder";
// import LogoutButton from "../Auth/LogoutButton";
import { Link } from "react-router-dom";
import "./TaskItemStyle.css";
import Root from "../../routes/Root";

// const TaskManager = () => {
//   const [tasks, setTasks] = useState([]);
const TaskItem = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("/taskList.json");
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error in fetch data", error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <>
      <Root />
      {/* <TaskAdder addData={tasks}/> */}
      <TaskLoop tasker={tasks} />
      <div>
        {/* <button className="loggoutButton"> */}
        <Link className="loggoutButton" type="button" to="/">
          Logout
        </Link>
      </div>
    </>
  );
};

export default TaskItem;
