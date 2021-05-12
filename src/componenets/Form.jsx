import react from "react";
import styled from "styled-components";
import Button from "./Button"
import { formatAMPM } from "../utils/"


const StyledForm = styled.form`
    display: flex;
    justify-content:space-around;
    align-items:center;
    input{
    height: 2rem;
    width:70%;
    right: 30vw;
    border:none;
    border-radius: 30px;
    background-color: #0081A7;
    padding: 1px;
    padding-left: 0.5em;
    transition: all 0.3s ease-in-out;
    box-shadow: 2px 3px 5px 1px rgba(0,0,0, 0.2);
    }
    input:focus {
        box-shadow: 0 0 16px 2px #0081A7;
    }

    @media(min-width: 768px){
    input{
        height: 3rem;
        font-size: 1.3em;
    }}
`

const Form = ({ input, setInput, tasks, setTasks, id, setId }) => {

    const handleChange = (e) => {
        setInput(e.target.value)
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        if(input){
          let now = formatAMPM(new Date());
          setTasks([{id: `${id}`, done: false, task: `${input}`, time: `${now}`}, ...tasks]);
          setId(id + 1);
          setInput("")
          }
      }
return(
    <StyledForm onSubmit={handleSubmit}>
        <input value={input} type="text" onChange={handleChange}></input>
        <Button onClick={handleSubmit}/>
    </StyledForm>
)
}
export default Form;