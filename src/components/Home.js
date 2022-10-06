import styled from "styled-components"
import axios from 'axios';
import { useEffect, useState } from "react";
import Filme from "./Filme";

export default function Home() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const pedido = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")

        pedido.then((resposta) => {
            setFilmes(resposta.data)

        })
    }, [])


    return (
        <StyledScreen>
            <p>Selecione o filme</p>
            <StyledContainerFilme>
                {filmes.map((i) => <Filme key={i.id} dados={i} />)}
            </StyledContainerFilme>
        </StyledScreen>
    )
};


const StyledScreen = styled.main`
margin-top: 67px;
width: 100%;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

p{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;

color: #293845;
}
`

const StyledContainerFilme = styled.div`
width: 100%;

display: flex;
flex-wrap: wrap;
justify-content: space-around;


`

