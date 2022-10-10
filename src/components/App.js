import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.js"
import Header from "./Header.js"
import SessionPage from "./SessionPage.js";
import SeatsPage from "./SeatsPage.js";
import EndPage from "./EndPage.js";
import { useState } from "react";
import styled from "styled-components";


export default function App() {

    const [seatsData, setSeatsData] = useState([])
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [chosenList, setChosenList] = useState([])


    return (
        <BrowserRouter>
            <StyledGlobal />
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sessoes/:id" element={<SessionPage />} />
                <Route path="/assentos/:horario"
                    element={<SeatsPage seatsData={seatsData}
                        setSeatsData={setSeatsData}
                        name={name}
                        setName={setName}
                        cpf={cpf}
                        setCpf={setCpf}
                        chosenList={chosenList}
                        setChosenList={setChosenList} />} />
                <Route path="/sucesso"
                    element={<EndPage seatsData={seatsData}
                        name={name}
                        cpf={cpf}
                        chosenList={chosenList}
                        setChosenList={setChosenList} />} />
            </Routes>
        </BrowserRouter>
    )
};

const StyledGlobal = styled.div`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

`
