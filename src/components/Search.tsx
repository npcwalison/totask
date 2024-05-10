import styled from "styled-components";
import React, { Dispatch, SetStateAction } from "react";


const Container = styled.div``;

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