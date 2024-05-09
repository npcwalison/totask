import React,{ useState, FormEvent  } from "react";
import styled from "styled-components";

const Container = styled.div`
    padding-bottom: 1.5rem;

    input, select {
        padding: 5px;
        margin-bottom: 10px;
        border: 1px solid #DDD;
        border-radius: 3px;
        width: 100%;
    }
`;



const TaskForm = ({ addTask }: any) => {
    const [value, setValue] = useState<string>("");
    const [category, setCategory] = useState<string>("");

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!value || !category) return;
        // adicionar task e limpar os campos
        addTask(value, category)
        setValue("")
        setCategory("")
    }

    return (
        <Container>
            <h1>Criar Tarefa:</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Digite o título"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit"> Criar Tarefa </button>
            </form>
        </Container>
    );
}


export default TaskForm;