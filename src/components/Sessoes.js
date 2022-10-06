import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Sessao from "./Sessao"


export default function Sessoes({ }) {

    // const [sessoes, setSessoes] = useState([])
    const [infoRodape, setInfoRodape] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const pedido = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`)

        pedido.then((resposta) => {
            setInfoRodape(resposta.data)
            // setSessoes(resposta.data.days)
            console.log(resposta.data)

        })
    }, [])


    return (

        <StyledScreen>
            <p>Selecione o horário</p>
            <StyledContainerSessoes>
                {infoRodape.days !== undefined && infoRodape.days.map((i, idx) => <Sessao key={i.id} dados={i} />)}
            </StyledContainerSessoes>
            <Rodape>
                <div>
                    <img src={infoRodape.posterURL}></img>
                </div>
                <p>{infoRodape.title}</p>
            </Rodape>
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

const StyledContainerSessoes = styled.div`
width: 100%;
`

const Rodape = styled.footer`
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