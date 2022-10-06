import styled from "styled-components"

export default function Sessao({ dados }) {


    return (
        <StyledSessao>
            <p>{dados.weekday} {dados.date}</p>
            <Container>
                {dados.showtimes.map((i) => <div>{i.name}</div>)}
            </Container>
        </StyledSessao>
    )
};


const StyledSessao = styled.div`
    width: 350px;
    height: 100px;
    
    box-sizing: border-box;
    margin:8px;


    p{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
display: flex;
align-items: center;
letter-spacing: 0.02em;

color: #293845;
}

`

const Container = styled.div`
display: flex;

div{
width: 83px;
height: 43px;

margin-right: 8px;

display: flex;
justify-content: center;
align-items: center;

background: #E8833A;
border-radius: 3px;

font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.02em;

color: #FFFFFF;
}
`