import react from"react";
import styled from"styled-components";

const StyledTask = styled.div`
    width: 100%;
    min-height: 12vh;
    height:auto;

    display: flex;
    justify-content: space-between;
    align-items:center;
    border-bottom: 1px solid rgba(0,0,0, 0.3);
    background-color: ${({ done }) => done ? '#CAC9B0' : '' };
    :hover{
        box-shadow: 1px 1px 8px 2px rgba(0,0,0, 0.3);
        transition: all 0.3s ease-in;
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
    font-size: 0.8rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
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
        background-color: #0081A7;
        color: #FDFCDC;
        box-shadow: 4px 5px 5px 1px rgba(0,0,0, 0.3);
        transition: all 0.3s ease-in;
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
    font-size: 1.1rem;

  }
  .time{
    font-size: 1.1rem;

  }
 
}
`

const Task = ({ tasks, setTasks }) => {

    const handleClick = (e) => {
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
            <StyledTask key={i+300} done={task.done}>
                <div className="check" key={i}>
                    <input type="checkbox" key={i+50} id={task.id} onChange={handleChange}></input>
                </div>
                <div className="task" key={i+100}>
                    <p key={i+150} >{task.task}</p>
                </div>
                <div className="time" key={i+200}>
                    <p key={i+250}>{task.time}</p>
                    <button className="btn" id={task.id} onClick={handleClick}>Delete</button>
                </div>
            </StyledTask>
        )
    }) :  (<></>)
    
    )



}

export default Task;
