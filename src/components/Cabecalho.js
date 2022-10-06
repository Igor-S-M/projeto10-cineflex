import styled from "styled-components"

export default function Cabecalho() {
    return (
        <StyledHeader>
            <p>CINEFLEX</p>
        </StyledHeader>
    )
};

const StyledHeader = styled.header`

width: 100%;
height: 67px;

display: flex;
justify-content: center;
align-items: center;

position: absolute;
left: 0px;
top: 0px;

background: #C3CFD9;

p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #E8833A;
}

`