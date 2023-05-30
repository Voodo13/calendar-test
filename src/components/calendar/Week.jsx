import React from 'react';
import {getDatesOfWeek, getDate} from "../../utils/date";
import styled from "styled-components";

const DayOfWeek = styled.div`
  font-size: .14rem;
  font-weight: 700;
`

const Day = styled.div`
  display: flex;
  font-size: 30px;

  div {
    display: block;
    width: .32rem;
    height: .32rem;
    background-color: ${props => props.$active ? 'red' : 'none'};
    color: ${props => props.$active ? 'white' : 'black'};
    border-radius: 50%;
    font-size: .20rem;
    text-align: center;
  }
`

const StyledDaysOfWeek = styled.div`
  height: 90px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`

const getDaysOfWeekComponents = (datesOfWeek, currentDate) => datesOfWeek.map((date) => {
    const {nameOfWeekDay, day, fullDate} = getDate(date)
    return (
        <div key={fullDate}>
            <DayOfWeek>{nameOfWeekDay[0]}</DayOfWeek>
            <Day $active={getDate(currentDate).fullDate === fullDate}>
                <div>{day}</div>
            </Day>
        </div>
    )
})

const Week = ({selectedDate}) => {
    const datesOfWeek = getDatesOfWeek(selectedDate)

    return (
        <StyledDaysOfWeek>
            {getDaysOfWeekComponents(datesOfWeek, new Date())}
        </StyledDaysOfWeek>
    );
};

export default Week;