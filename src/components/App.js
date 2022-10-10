import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.js"
import Header from "./Header.js"
import SessionPage from "./SessionPage.js";
import SeatsPage from "./SeatsPage.js";
import EndPage from "./EndPage.js";
import { useState } from "react";


export default function App() {

    const [seatsData, setSeatsData] = useState([])
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState(0)
    const [chosenList, setChosenList] = useState([])


    return (

        <BrowserRouter>
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
                        chosenList={chosenList} />} />
            </Routes>
        </BrowserRouter>
    )
};


