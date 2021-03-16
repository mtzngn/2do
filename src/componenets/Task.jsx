import react from"react";
import styled from"styled-components";

const StyledTask = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    height: 12vh;
    


.check{
    margin-left: 5px;
    width: 15%;
}
.task{
    font-size: 0.8rem;
}
.time{
    width: 50%;
}
`

const Task = () => {
return(
    <StyledTask>
            <div className="check">
                <input type="radio"></input>
            </div>
            <div className="task">
                <p>Shopping and cooking and cleaning and more and more</p>
            </div>
            <div className="time">
                <p>2:00PM</p>
            </div>
    </StyledTask>
)
}

export default Task;
