import react from "react";
import styled from "styled-components"

const StyledButton = styled.button`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    border:none;
    background-color: #F07167;
    box-shadow: 2px 3px 5px 1px rgba(0,0,0, 0.2);
    :hover{
    color: #FDFCDC;
    box-shadow: 0 0  16px 2px #F07167;
    transform: translateY(-1px);
    transition: all 0.1s ease-in;
    cursor: pointer;
    }
    :active{
    background-color: #005A74;
    box-shadow:2px 2px 3px 1px rgba(0,0,0, 0.3), inset 4px 5px 5px 1px rgba(0,0,0, 0.3);
    }
    :focus {outline:0;}

    @media(min-width: 768px){
    height: 3.5rem;
    width: 3.5rem;
  }
`

const Button = () => {

return(
    <StyledButton>
        Add
    </StyledButton>
)
}

export default Button;