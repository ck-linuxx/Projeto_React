import React from "react"
import { useParams } from "react-router-dom"

import Button from "./Button"
import "./TaskDetails.css"

const TaskDetails = () => {
    const params = useParams()

    return (
        <React.Fragment>
            <div className="back-button-container">
                <Button>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Et quisquam sunt sit sol
                    uta provident impedit aperiam libero aut l
                    aboriosam maxime dignissimos laudantium du
                    cimus, excepturi facilis sint delectus ips
                    um asperiores minima.
                </p>
            </div>
        </React.Fragment>
    )
}

export default TaskDetails