import React from 'react';
import Task from "./Task"
import "./Task.css"

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
    return (
        <React.Fragment>
            {tasks.map((task) => (
                <Task 
                key={task.id}
                task={task} 
                handleTaskClick={handleTaskClick} 
                handleTaskDeletion={handleTaskDeletion}/>
            ))}
        </React.Fragment>
    )
};

export default Tasks;