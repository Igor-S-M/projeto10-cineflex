import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Session from "./Session"


export default function SessionPage({}) {

    const [sessionData, setSessionData] = useState({})

    /*

    sessionData = {
        id: Number,
        overview: string,
        posterURL: url,
        releaseDate: string,
        title: string,
        days: Lista
    }
    
    */

    
    //id = ID_DO_FILME => do obj de movieData => lista movieLista
    const {id} = useParams()

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`)

        request.then((answer) => {
            setSessionData(answer.data)
            console.log(answer.data)


        })
    }, [])


    return (

        <StyledScreen>
            <p>Selecione o horário</p>
            <StyledContainerSessions>
                {sessionData.days !== undefined && sessionData.days.map((i, idx) => <Session key={i.id} dayData={i} />)}
            </StyledContainerSessions>
            <StyledFooter>
                <div>
                    <img src={sessionData.posterURL}></img>
                </div>
                <p>{sessionData.title}</p>
            </StyledFooter>
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
    font-family: 'Roboto', sans-serif;
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

const StyledContainerSessions = styled.div`
width: 100%;
`

const StyledFooter = styled.footer`
position: fixed;
width: 100%;
height: 117px;
left: 0px;
bottom: 0px;

background: #DFE6ED;
border: 1px solid #9EADBA;

display: flex;
justify-content: space-around;
align-items: center;

div{
width: 64px;
height: 89px;

background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 2px;

display: flex;
justify-content: center;
align-items: center;

img{
width: 48px;
height: 72px;
}

}

p{
width: 60%;
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 30px;
display: flex;
align-items: center;

color: #293845;   
}

`