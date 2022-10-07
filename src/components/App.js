import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.js"
import Header from "./Header.js"
import SessionPage from "./SessionPage.js";
import SeatsPage from "./SeatsPage.js";


export default function App() {
    return (

        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/filme-sessoes/:id" element={<SessionPage/>}/>
            <Route path="/filme-assentos/:horario" element={<SeatsPage/>}/>
            
        </Routes>
    </BrowserRouter>
    )
};


