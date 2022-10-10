import axios from "axios"
import { useEffect} from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Seat from "./Seat"
import PersonalInfo from "./PersonalInfo"

export default function SeatsPage({seatsData, setSeatsData, chosenList, setChosenList, name, setName, cpf, setCpf}) {


    const { horario } = useParams()

    /*

    seatsData = {
        id: Number,
        name: string - horas que comeca,
        day: {dayData - [showtimes]}
        movie: {movieData}
        seats: lista de objs seat{
                                    id: Number
                                    name: numero do assento
                                    isAvailable: boolean
                                }
    }

    */

    useEffect(() => {
        const pedido = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${horario}/seats`)

        pedido.then((resposta) => {
            setSeatsData(resposta.data)

            console.log(resposta.data)
        })
    }, [])

    console.log("SeatsPage:",chosenList)

    return (
        <StyledScreen>
            <p>Selecione o(s) assento(s)</p>

            <StyledContainerSeats>
                {seatsData.seats !== undefined && seatsData.seats.map((i, idx) => (
                    <Seat key={i.id} data={i} chosenList={chosenList} setChosenList={setChosenList}></Seat>
                ))}
            </StyledContainerSeats>

            <StyledLegenda>
                <div className="container">
                    <div className={`verde`}></div>
                    <p>Selecionado</p>
                </div>
                <div className="container">
                    <div className={`cinza`}></div>
                    <p>Disponível</p>
                </div>
                <div className="container">
                    <div className={`laranja`}></div>
                    <p>Indisponível</p>
                </div>
            </StyledLegenda>

            <PersonalInfo  chosenList={chosenList} name={name} setName={setName} setCpf={setCpf} cpf={cpf}/>


            <StyledFooter>
                <div className="slot-image">
                    <img src={seatsData.movie !== undefined && seatsData.movie.posterURL} alt="imagem-filme"></img>
                </div>
                <div className="slot-texto">
                    <p>{seatsData.movie !== undefined && seatsData.movie.title}</p>
                    <p>{seatsData.day !== undefined && seatsData.day.weekday} - {seatsData.name}</p>
                </div>
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


const StyledContainerSeats = styled.div`

width: 100%;
height: 200px;

display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;

`

const StyledLegenda = styled.div`

width: 100%;

margin-top: 8px;

display: flex;
justify-content: space-around;

.container{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

.container div{
box-sizing: border-box;

width: 25px;
height: 25px;

border-radius: 17px
}

.container .verde{
background: #1AAE9E;
border: 1px solid #0E7D71;
}

.container .cinza{
background: #C3CFD9;
border: 1px solid #7B8B99;
}

.container .laranja{
background: #FBE192;
border: 1px solid #F7C52B;
}

p{
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 15px;
display: flex;
align-items: center;
letter-spacing: -0.013em;

color: #4E5A65;


}

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

.slot-image{
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

.slot-texto{

    width: 287px;
    height: 119px;
    display: flex;
    flex-direction: column;
    justify-content: center;

p{
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 30px;
display: flex;
align-items: center;

margin:0px;

color: #293845;
}
}

`

