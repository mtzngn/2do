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
        top: 45px;
        border-radius: 50%50%;
        border:none;
        background-color: #F07167;
      }
    }
  }
  hr{
    width: 99%;
    height: 0.2px;
    color: red;
  }
}

` 

function App() {
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
              <button>Add</button>
            </div>
          </div>
        </div>
        <hr/>
        <Task/>
      </div>
    </StyledApp>
  );
}

export default App;
