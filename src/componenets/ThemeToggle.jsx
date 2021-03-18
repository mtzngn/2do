import react from "react";
import styled from "styled-components";

const StyledToggle = styled.div`
width: 100%;
margin-bottom: 20px ;
display: flex;
justify-content: center;
align-items:center;

h2{
    color: ${({checked}) => checked ? '#F07167' : 'rgb(0,129,167)'}  ;
    margin-right: 10px;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2196F3;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #F07167;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
`

const ThemeToggle = ({ checked, setChecked }) =>{

    const handleSwitch = () => {
        setChecked(!checked);
    }
    return(
        <StyledToggle checked={checked}>
            <h2>Change Theme</h2>
            <label className="switch">
                <input type="checkbox" onChange={handleSwitch}/>
                <span className="slider round"></span>
            </label>
        </StyledToggle>
    )
}


export default ThemeToggle;