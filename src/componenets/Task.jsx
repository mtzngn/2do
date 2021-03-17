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
}
.time{
    width: 20%;
}
`

const Task = ({ task }) => {


return(
    <StyledTask>
            <div className="check">
                <input type="radio"></input>
            </div>
            <div className="task">
                <p>{task.task}</p>
            </div>
            <div className="time">
                <p>{task.time}</p>
            </div>
    </StyledTask>
)
}

export default Task;
