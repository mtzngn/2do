import react from"react";
import styled from"styled-components";

const StyledTask = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    height: 12vh;
    border-bottom: 1px solid rgba(0,0,0, 0.3);
    :hover{
        box-shadow: 2px 3px 5px 1px rgba(0,0,0, 0.3);
        transform: translateY(-2px);
        transition: all 0.3s ease-in;
    }
    


.check{
    margin-left: 5px;
    width: 15%;
}
.task{
    font-size: 0.8rem;
    p{
        text-decoration: ${ ({ done }) => done ? 'line-through' : 'none'};
    }
}
.time{
    width: 20%;
}
`

const Task = ({ tasks, setTasks }) => {

    const handleClick = (e) => {
        let tempA = tasks;
        setTasks(tempA.filter(task => task.id != e.target.id));

    }
    const handleChange = (e) =>{
        let tempA = tasks.map((task)=>{
            if(task.id == e.target.id){
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
                    <p key={i+150}>{task.task}</p>
                </div>
                <div className="time" key={i+200}>
                    <p key={i+250}>{task.time}</p>
                    <button id={task.id} onClick={handleClick}>Delete</button>
                </div>
            </StyledTask>
        )
    }) :  (<></>)
    
    )



}

export default Task;
