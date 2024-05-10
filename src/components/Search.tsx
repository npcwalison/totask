import styled from "styled-components";
import React, { Dispatch, SetStateAction } from "react";


const Container = styled.div`
    border-bottom: 1px solid #555;
    margin-bottom: 20px;
    width: 100%;

    input {
        padding: 5px;
        margin-bottom: 10px;
        border: 1px solid #DDD;
        border-radius: 3px;
        width: 100%;
    }
`;

type SearchPorps = {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
}



const Search:React.FC<SearchPorps> = ({ search, setSearch }) => {
    return (
        <Container>
            <h1>Pesquisar</h1>
            <input
                type="text"
                placeholder="Digite para pesquisar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </Container>
    )
}



export default Search;