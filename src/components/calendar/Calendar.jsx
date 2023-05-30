import React from 'react';
import styled from "styled-components";
import Week from "./Week";
import {getDate} from "../../utils/date";

const StyledDate = styled.div`
  padding-left: 50px;
  background-color: #f6f6f6;
  border-bottom: 2px solid #ebebeb;
  border-left: none;
  border-right: none;
`
const StyleMonthYear = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  align-items: center;

  button {
    background-color: inherit;
    border: none;
    color: red;
    font-size: .30rem;
    font-weight: 500;
  }

  div {
    text-align: center;
    font-size: .20rem;
  }
`

const Calendar = ({selectedDate, setSelectedDate}) => {
    const {nameOfMont, year, month, day, h} = getDate(selectedDate)

    const weekInc = () => {
        const date = new Date(year, month, day + 7, h)
        setSelectedDate(date)
    }
    const weekDec = () => {
        const date = new Date(year, month, day - 7, h)
        setSelectedDate(date)
    }

    return (
        <StyledDate>
            <Week selectedDate={selectedDate}/>
            <StyleMonthYear>
                <button onClick={weekDec}>{'<'}</button>
                <div>{`${nameOfMont} ${year}`}</div>
                <button onClick={weekInc}>{'>'}</button>
            </StyleMonthYear>
        </StyledDate>
    );
};

export default Calendar;