import React, { useState } from "react";
import { Container } from "./styles";

type TasksType = {
    id: number;
    text: string;
    category: string;
    isCompleted: boolean;
}[];

function App() {
    const [tasks, setTasks] = useState<TasksType>([
        {
            id: 1,
            text: "Criar funcionalidade X para o sistema de tarefas",
            category: "Trabalho",
            isCompleted: false,
        },
        {
            id: 2,
            text: "Ir para academia",
            category: "Pessoal",
            isCompleted: false,
        },
        {
            id: 3,
            text: "Estudar React",
            category: "Estudos",
            isCompleted: false,
        },
    ]);
    return (
        <Container>
            <h1>Lista de Tarefas</h1>

            <div className="todo-list">
                {tasks.map((task) => (
                    <div className="task">

                        <div className="content">
                            <p>{task.text}</p>
                            <p className="category">({task.category})</p>
                        </div>

                        <div>
                            <button>Completar</button>
                            <button>X</button>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}

export default App;
