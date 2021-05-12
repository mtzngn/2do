import React from"react";
import styled from"styled-components";

const StyledTask = styled.div`
    width: 100%;
    min-height: 12vh;
    height:auto;
    display: flex;
    justify-content: space-between;
    align-items:center;
    transition: transform 200ms ease-in-out, background-color 200ms ease-in-out;

    p{
        color: ${({ checked }) => checked ? '#fff' : '#000'};
    }
    :hover{
        box-shadow: 1px 1px 8px 2px rgba(0,0,0, 0.3);
        transform: scale(1.02);
        background-color: ${({ checked }) => checked ? '#0483a7' : '#e0dfc3'};
    }
    
input, button {
    cursor: pointer;
}
.check{
    margin-left: 5px;
    width: 15%;
    display: flex;
    justify-content: center;
    align-items:center;
}
.task{
    min-height: 12vh;
    height:auto;
    width:65%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    word-break: break-all;

    font-size: 0.8rem;
    p{
        text-decoration: ${ ({ done }) => done ? 'line-through' : 'none'};
    }
}
.time{
    width: 20%;
    min-height: 12vh;
    height:auto;
    font-size: 0.8rem;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    .btn{
        height: 2rem;
        width: 3rem;
        border-radius: 5px;
        border:none;
        background-color: #F07167;
        box-shadow: 2px 3px 5px 1px rgba(0,0,0, 0.2);
      }
      .btn:hover{
        color: #FDFCDC;
        box-shadow: 0 0  16px 2px #F07167;
        transition: all 0.1s ease-in;
        cursor: pointer;
      }
      .btn:active{
        background-color: #005A74;
        box-shadow:2px 2px 3px 1px rgba(0,0,0, 0.3), inset 4px 5px 5px 1px rgba(0,0,0, 0.3);
      }
      .btn:focus {outline:0;}
    
}

@media(min-width: 768px){
  .check{
    font-size: 1.1rem;

  }
  .task{
    font-size: 1.5rem;

  }
  .time{
    font-size: 1.5rem;
  }
 
}
`

const Task = ({ tasks, setTasks, checked }) => {

    const handleDelete = (e) => {
        let tempA = tasks;
        setTasks(tempA.filter(task => task.id !== e.target.id));

    }
    const handleChange = (e) =>{
        let tempA = tasks.map((task)=>{
            if(task.id === e.target.id){
                task.done = !task.done;
            }
            return task;
        });
        setTasks(tempA);

    }
    
    return(
        tasks ? tasks.map((task,i)=>{
            return(    
            <StyledTask key={i+300} done={task.done} checked={checked}>
                <div className="check" key={i}>
                    <input type="checkbox" key={i+50} id={task.id} onChange={handleChange}></input>
                </div>
                <div className="task" key={i+100}>
                    <p key={i+150} >{task.task}</p>
                </div>
                <div className="time" key={i+200}>
                    <p key={i+250}>{task.time}</p>
                    <button className="btn" id={task.id} onClick={handleDelete}>Delete</button>
                </div>
            </StyledTask>
        )
    }) :  (<></>)
    
    )



}

export default Task;
