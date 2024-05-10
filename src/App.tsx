import { useState } from "react";
import { Container } from "./styles";

import TaskItem from "./components/TaskItem";
import TaskForm from "./components/TaskForm";

function App() {
    const [tasks, setTasks] = useState([
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

    const addTask = (text: any, category: any) => {
        const newTask = [...tasks, {
            id: Math.floor(Math.random() * 10000),
            text,
            category,
            isCompleted: false,
        }];

        setTasks(newTask);
    }

    const removeTask = (id: number) => {
        const newTask = [...tasks]
        const filterTasks = newTask.filter(task =>
            task.id !== id ? task : null
        );
        setTasks(filterTasks)
    }

    return (
        <Container>
            <h1>Lista de Tarefas</h1>
            <div className="todo-list">
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        removeTask={removeTask}
                    />
                ))}
            </div>

            <TaskForm addTask={addTask} />
        </Container>
    );
}

export default App;
