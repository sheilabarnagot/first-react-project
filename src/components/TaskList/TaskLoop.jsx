// import React from 'react'
import PropTypes from "prop-types";

function TaskLoop(props) {
  return (
    <>
      {/* {JSON.stringify(props.tasker)} */}

      <div>
        <h2 style={{ color: "#00d8ff" }}>Your tasks</h2>
        {props.tasker &&
          props.tasker.map((task, index) => (
            <div key={index}>
              <h3>
                {task.id} - {task.name}
              </h3>
              <p>{task.tasks}</p>
              {/* <p>ID: {task.id}</p> */}
            </div>
          ))}
      </div>
    </>
  );
}
TaskLoop.propTypes = {
  tasker: PropTypes.array,
};

export default TaskLoop;
