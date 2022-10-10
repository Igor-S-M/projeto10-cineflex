import styled from "styled-components"
import axios from 'axios';
import { useEffect, useState } from "react";
import Movie from "./Movie";

export default function HomePage() {

    const [moviesList, setMoviesList] = useState([])

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")

        promise.then((answer) => {
            setMoviesList(answer.data)
            console.log(answer.data)
        })

    }, [])


    return (
        <StyledScreen>
            <p>Selecione o filme</p>
            <StyledContainerMovie>
                {moviesList.map((i) => <Movie key={i.id} movieData={i} />)}
            </StyledContainerMovie>
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

const StyledContainerMovie = styled.div`
width: 100%;

display: flex;
flex-wrap: wrap;
justify-content: space-around;


`

