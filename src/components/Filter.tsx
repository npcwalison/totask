import styled from "styled-components";
import React, { Dispatch, SetStateAction } from "react";

const Container = styled.div`
    border-bottom: 1px solid #555;
    margin-bottom: 20px;
    width: 100%;

    .filter-options {
        display: flex;
        justify-content: space-between;
        gap: 3rem;
    }

    div {
        flex: 1 1 0;

        select {
            padding: 5px;
            margin-bottom: 10px;
            border: 1px solid #ddd;
            border-radius: 3px;
            width: 100%;
        }
    }
`;

type FilterPorps = {
    filter: string;
    setFilter: Dispatch<SetStateAction<string>>;
    setSort: Dispatch<SetStateAction<string>>;
}

const Filter:React.FC<FilterPorps> = ({ filter, setFilter, setSort }) => {
    return (
        <Container>
            <h1>Filtrar</h1>
            <div className="filter-options">
                <div>
                    <p>status:</p>
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incompleted">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem alfabética:</p>
                    <button onClick={() => setSort('Asc')}>A → Z</button>
                    <button onClick={() => setSort('Desc')}>Z → A</button>
                </div>
            </div>
        </Container>
    );
};

export default Filter;
