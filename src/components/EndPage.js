import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function EndPage({seatsData,chosenList,setChosenList, name, cpf}) {
    

    const numbersChosenList = []
    seatsData.seats.map((i,idx)=>chosenList.includes(i.id)? numbersChosenList.push(i.name): null)
       


    const sortedChosenList = [...numbersChosenList].sort((a,b)=> a-b) 
    let navigate = useNavigate()

    function voltarHome(e){
        e.preventDefault()
        e.stopPropagation()

        setChosenList([])
        navigate("/")
    }

    return (
        <StyledScreen>
            <p>Pedido feito com sucesso!</p>
            <div className="filme">
                <h2>Filme e Sessao</h2>
                <p>{seatsData.movie!== undefined && seatsData.movie.title}</p>
                <p>{seatsData.day!== undefined && seatsData.day.date} {seatsData.name}</p>
            </div>
            <div className="ingresso">
                <h2>Ingressos</h2>
                {sortedChosenList.map((i,idx)=><p key={idx}>{`Assento ${i}`}</p>)}
            </div>
            <div className="informacoes">
                <h2>Comprador</h2>
                <p>{name}</p>
                <p>{cpf}</p>
            </div>
            <Link to="/">
                <button onClick={voltarHome}>
                    <p>Voltar para Home</p>
                </button>
            </Link>
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
width: 180px;
font-family: 'Roboto', sans-serif;

font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
text-align: start;
letter-spacing: 0.04em;

color: #247A6B;
}

div{
box-sizing: border-box;
width: 100%;
margin: 12px;
margin-left: 28px;

h2{
margin: 0px;

margin-bottom: 6px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
letter-spacing: 0.04em;

color: #293845;
}
p{
width: 100%;
margin: 2px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
display: flex;
align-items: center;
letter-spacing: 0.04em;

color: #293845;
    }
}

button{
position: absolute;
width: 225px;
height: 42px;
left: 74px;
top: 622px;

background: #E8833A;
border-radius: 3px;

display: flex;
align-items: center;
justify-content: center;

p{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;

color: #FFFFFF;
}
}
`