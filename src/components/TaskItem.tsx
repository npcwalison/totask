import React from "react";
import styled from "styled-components";

const Container = styled.div`
    .complete {
        background-color: #5CB85C;
    }
    .remove {
        background-color: #D9534F;
    }
`;

type TasksType = {
    id: number;
    text: string;
    category: string;
    isCompleted: boolean;
};

type PropsType = {
    task: TasksType;
}

const TaskItem:React.FC<PropsType> = ({ task }) => {
    return (
        <Container>
            <div className="content">
                <p>{task.text}</p>
                <p className="category">({task.category})</p>
            </div>

            <div>
                <button className="complete">Completar</button>
                <button className="remove">X</button>
            </div>
        </Container>
    );
}


export default TaskItem;
