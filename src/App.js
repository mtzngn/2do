import react, { useState } from "react";
import './App.css';
import styled from "styled-components";
import Task from "./componenets/Task";

const StyledApp = styled.div`
width: 100%;
min-height: 100vh;
height:auto;
background: linear-gradient(135deg, #F07167 50%, #0081A7 50% );
display: flex;
flex-direction: column;
justify-content:flex-start;
align-items: center;
.title{
  margin: 5%;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container{
  min-height:fit-content;
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
    width:70%;
  
    right: 30vw;
    border:none;
    border-radius: 10px;
    background-color: #fff;
    padding: 1px;
    transition: all 0.3s ease-in-out;
    box-shadow: 2px 3px 5px 1px rgba(0,0,0, 0.2);
  }
  .btn{
        height: 3rem;
        width: 3rem;
        
        border-radius: 50%;
        border:none;
        background-color: #F07167;
        box-shadow: 2px 3px 5px 1px rgba(0,0,0, 0.2);
      }
      .btn:hover{
        background-color: #0081A7;
        color: #FDFCDC;
        box-shadow: 4px 5px 5px 1px rgba(0,0,0, 0.3);
        transform: translateY(-1px);
        transition: all 0.3s ease-in;
        cursor: pointer;
      }
      .btn:active{
        background-color: #005A74;
        box-shadow:2px 2px 3px 1px rgba(0,0,0, 0.3), inset 4px 5px 5px 1px rgba(0,0,0, 0.3);
      }
      .btn:focus {outline:0;}
}
` 

function App() {

  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(1);

  const formatAMPM = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  const handleClick = () =>  {
    if(input){
      let now = formatAMPM(new Date);
    setTasks([{id: `${id}`, done: false, task: `${input}`, time: `${now}`}, ...tasks]);
    setId(id + 1);
    setInput("")
    }
  }
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(input){
      let now = formatAMPM(new Date);
      setTasks([{id: `${id}`, done: false, task: `${input}`, time: `${now}`}, ...tasks]);
      setId(id + 1);
      setInput("")
      }
  }

  const nth = (d) => {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }
  let today = new Date();
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  let dayname = String(days[today.getDay()]);
  let dayNum = String(today.getDate()).padStart(2, '0');
  let monthName = monthNames[today.getMonth()];

  return (
    <StyledApp>
      <div className="title">
        <h1>2do app</h1>
      </div>

      <div className="container">
        <div className="head">
          <div className="date">
            <h3>{dayname}, <span id="no-day">{dayNum}{nth(dayNum)}</span></h3>
            <h4>{monthName}</h4>
          </div>
          <div className="head-right">
            <div>
              <h4>{tasks.length} tasks</h4>
            </div>
            <div className="enter-task">
              <form onSubmit={handleSubmit}>
                  <input value={input} type="text" onChange={handleChange}></input>
                  <button className="btn" onClick={handleClick}>Add</button>
              </form>
            </div>
          </div>
        </div>
        <hr/>
        <Task tasks={tasks} setTasks={setTasks}/>

        

      </div>

    </StyledApp>
  );
}

export default App;
