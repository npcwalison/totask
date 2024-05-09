import styled from "styled-components";


export const Container = styled.div`
    max-width: 600px;
    margin: 0 auto 300px;
    background-color: #EFEFEF;
    padding: 20px 30px;
    border-radius: 10px;

    h1 {
        text-align: center;
    }

    h2 {
        margin-bottom: 10px;
    }

    p {
        margin: 10px 0;
    }

    input {
        box-sizing: border-box;
    }

    button {
        background-color: #333974;
        color: #fff;
        padding: 5px 10px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        opacity: 0.8;
        transition: opacity 0.3s;
        &:hover {
            opacity: 1;
        }
    }
`;