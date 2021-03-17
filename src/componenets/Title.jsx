import react from "react";
import styled from "styled-components";

const StyledTitle = styled.div`

  margin: 5%;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  h1{
    font-size: 3em;
    font-family: 'Rancho', cursive;
    color: #0081A7;
    text-shadow: 2px 2px 3px rgba(0,0,0, 0.7);
  }

@media(min-width: 768px){
  h1{
    font-size: 4.5em;
}}
@media(min-width: 1024px){
  h1{
    font-size: 6.5em;
  }}
@media(min-width: 2560px){
  h1{
    font-size: 9.5em;
  }}
`

const Title = ()=>{
    return(
    <StyledTitle>
        
            <h1>2do app</h1>
        
    </StyledTitle>

    )
}

export default Title;