import react, { useState } from "react";
import './App.css';
import styled from "styled-components";
import Task from "./componenets/Task";

const StyledApp = styled.div`
width: 100%;
height: 100vh;
background: linear-gradient(135deg, #F07167 50%, #0081A7 50% );
display: flex;
flex-direction: column;
justify-content:flex-start;
align-items: center;
.title{
  height: 10%;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container{
  height:fit-content;
  width: 80%;
  background-color: #FDFCDC;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  border-radius: 25px 25px 0 0;


  .head{
    width: 95%;
    margin: 20px;
    display: flex;
    align-items:center;
    justify-content: space-between;

    .head-right{
      button{
        height: 3rem;
        width: 3rem;
        position:relative;
        top: 5vh;
        border-radius: 50%50%;
        border:none;
        background-color: #F07167;
        box-shadow: 2px 3px 5px 1px rgba(0,0,0, 0.2);

      }
    }
  }
  hr{
    width: 99%;
    height: 0.2px;
    color: red;
  }
}
.enter-task{
  input{
    height: 2rem;
    width:50%;
    position:absolute;
    top:21vh;
    right: 30vw;
    border:none;
    border-radius: 10px;
    background-color: #fff;
    padding: 1px;
    transition: all 0.3s ease-in-out;
    box-shadow: 2px 3px 5px 1px rgba(0,0,0, 0.2);
  }
}
` 

function App() {

  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleClick = () =>  {
    if(input){
    setTasks([...tasks, {done: false, task: `${input}`, time: "2:00pm"}]);
    setInput("")
    }
  }
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <StyledApp>
      <div className="title">
        <h1>to do app</h1>
      </div>

      <div className="container">
        <div className="head">
          <div className="date">
            <h3>Monday, <span id="no-day">12th</span></h3>
            <h4>March</h4>
          </div>
          <div className="head-right">
            <div>
              <h4>No tasks</h4>
            </div>
            <div>
              <button onClick={handleClick}>Add</button>
            </div>
          </div>
        </div>
        <hr/>
        {tasks ? tasks.map((task)=>{return(<Task task={task}/>)}) : <></>}
        

      </div>
      <div className="enter-task">
        <input value={input} type="text" onChange={handleChange}></input>
      </div>
    </StyledApp>
  );
}

export default App;
