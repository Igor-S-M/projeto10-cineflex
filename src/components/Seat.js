import { useState } from "react";
import styled from "styled-components";

export default function Seat({ data, chosenList, setChosenList }) {

    const [chosen, setChosen] = useState(false)

    function clickSeat(numero, flag) {
        console.log("clickSeat acionado", numero)

        if (flag === false) {
            alert("Esse assento não está disponível")
        } else {
            if (chosen === false) {
                setChosen(true)

                addChosenList(numero)
            } else {
                setChosen(false)

                removeChosenList(numero)
            }
        }
    }

    function addChosenList(numero) {
        const novoEstado = [...chosenList]
        novoEstado.push(Number(numero))
        setChosenList(novoEstado)
    }

    function removeChosenList(numero) {

        const EstadoAtual = [...chosenList]
        const novoEstado = EstadoAtual.filter((i) =>  i !== numero )
        setChosenList(novoEstado)
    }


    return (

        <StyleButton >
            <button className={`${chosen ? "selecionado" : data.isAvailable ? "disponivel" : "indisponivel"}`}
                onClick={() => clickSeat(data.name, data.isAvailable)}>
                {data.name}
            </button>
        </StyleButton>


    )
};



const StyleButton = styled.div`

button{
    box-sizing: border-box;

width: 25px;
height: 25px;

margin-left: 5px;
margin-right: 5px;

border-radius: 17px;
}

.disponivel{
    background: #C3CFD9;
border: 1px solid #7B8B99;
}

.indisponivel{
    background: #FBE192;
border: 1px solid #F7C52B;
}

.selecionado{
    background: #1AAE9E;
border: 1px solid #0E7D71;
}
`
