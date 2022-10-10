import { useState } from "react";
import styled from "styled-components";

export default function Seat({ data, chosenList, setChosenList }) {


    function clickSeat(numero, flag) {


        if (flag === false) {

            alert("Esse assento não está disponível")

        } else {
            if (!chosenList.includes(numero)) {


                addChosenList(numero)

            } else {

                removeChosenList(numero)
            }
        }
    }

    function addChosenList(numero) {
        const novoEstado = [...chosenList]
        novoEstado.push(numero)
        setChosenList(novoEstado)
    }

    function removeChosenList(numero) {

        const EstadoAtual = [...chosenList]
        const novoEstado = EstadoAtual.filter((i) => i !== numero)
        setChosenList(novoEstado)
    }


    return (

        <StyleButton >
            <button className={`${chosenList.includes(Number(data.id)) ? 
            "selecionado" : 
            data.isAvailable ? "disponivel" : "indisponivel"}`}
                onClick={() => clickSeat(Number(data.id), data.isAvailable)}>
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
