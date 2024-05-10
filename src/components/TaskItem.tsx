import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .complete {
        background-color: #5cb85c;
    }
    .remove {
        background-color: #d9534f;
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
    removeTask: (id: number) => void;
};

const TaskItem: React.FC<PropsType> = ({ task, removeTask }) => {
    return (
        <Container>
            <div className="content">
                <p>{task.text}</p>
                <p className="category">({task.category})</p>
            </div>

            <div>
                <button
                    className="complete"
                >Completar</button>
                <button
                    className="remove"
                    onClick={() => removeTask(task.id)}
                >X</button>
            </div>
        </Container>
    );
};

export default TaskItem;
