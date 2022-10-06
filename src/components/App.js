import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js"
import Cabecalho from "./Cabecalho.js"
import Sessoes from "./Sessoes.js";
import Assentos from "./Assentos.js";


export default function App() {
    return (

        <BrowserRouter>
        <Cabecalho/>
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/filme-sessoes/:id" element={<Sessoes/>}/>
            <Route path="/filme-assentos" element={<Assentos/>}/>
            
        </Routes>
    </BrowserRouter>
    )
};


