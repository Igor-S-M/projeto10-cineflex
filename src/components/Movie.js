import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Movie({ movieData }) {


    return (
        <StyledMovie>
            <div>
                <Link to={`/sessoes/${movieData.id}`}>
                    <img src={movieData.posterURL} alt={movieData.title}></img>
                </Link>
            </div>
        </StyledMovie>
    )
};


const StyledMovie = styled.div`
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