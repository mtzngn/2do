import React, { useState } from "react";
import './App.css';
import styled from "styled-components";
import Task from "./componenets/Task";
import DateSection from "./componenets/DateSection";
import Title from "./componenets/Title";
import Form from "./componenets/Form";
import ThemeToggle from "./componenets/ThemeToggle";



const StyledApp = styled.div`
width: 100%;
min-height: 100vh;
height:auto;
background : ${({ checked })=> checked ? 'linear-gradient(135deg, #022c43 50%, #053f5e 50% )' : 'linear-gradient(135deg, #F07167 50%, #0081A7 50% )'} ;
display: flex;
flex-direction: column;
justify-content:flex-start;
align-items: center;
h4{
  color: ${({ checked })=> checked ? '#fff' : '#000'}
}
.container{
  min-height:fit-content;
  width: 80%;
  background-color: ${({checked}) => checked ? 'rgba(17,81,115, 0.4)' : 'rgba(253, 252, 220, 0.8)'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  border-radius: 25px 25px 0 0;
  box-shadow: 10px 10px 50px 5px rgba(0,0,0, 0.4);

  .head{
    width: 95%;
    margin: 20px;
    display: flex;
    align-items:center;
    justify-content: space-between;
    border-bottom: 1px solid #000;
    padding-bottom: 10px;
  }

}
@media(min-width: 768px){
h3{
  font-size: 2em;
}
h4{
  font-size: 1.5em;
}}
` 

function App() {

  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(1);
  const [checked, setChecked] = useState(false);


  return (
    <StyledApp checked={checked}>
      <Title checked={checked}/>
      <ThemeToggle checked={checked} setChecked={setChecked}/>
      <div className="container">
        <div className="head">
          <DateSection checked={checked}/>
          <div className="head-right">
            <div className="no-tasks" style={{textAlign: "center"}}>
              <h4>{tasks.length} tasks</h4>
            </div>
            <div className="enter-task" style={{display: "flex"}}>
              <Form input={input} setInput={setInput} tasks = {tasks} setTasks={setTasks} id={id} setId={setId}></Form>
            </div>
          </div>
        </div>
        <Task tasks={tasks} setTasks={setTasks} checked={checked}/>
      </div>
    </StyledApp>
  );
}

export default App;
