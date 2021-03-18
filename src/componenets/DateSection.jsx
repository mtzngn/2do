import react from "react";
import styled from "styled-components";

const StyledDateSection = styled.div`
    .date{
      #name-day{
        color: #F07167;
      }
      #no-day{
        color: #F07167;
        font-weight: 200;

      }
      #month-name{
        font-weight: 300;
        color: ${({ checked }) => checked ? '#fff' : '#000'};


      }
    }
`

const DateSection = ({ checked }) =>{

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
    
return(
    <StyledDateSection checked={checked}>
        <div className="date">
            <h3 id="name-day">{dayname}, <span id="no-day">{dayNum}{nth(dayNum)}</span></h3>
            <h4 id="month-name">{monthName}</h4>
        </div>
    </StyledDateSection>

)
}

export default DateSection;