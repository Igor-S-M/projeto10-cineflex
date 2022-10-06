import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Filme({ dados }) {


    return (
        <StyledFilme>
            <div>
                <Link to={`/filme-sessoes/${dados.id}`}>
                    <img src={dados.posterURL} alt={dados.name}></img>
                </Link>
            </div>
        </StyledFilme>
    )
};


const StyledFilme = styled.div`
div{
    width: 145px;
    height: 209px;
    
    margin:8px;
    
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 129px;
        height: 193px; 
    }
}
`