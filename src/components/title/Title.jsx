import React from 'react';
import styled from "styled-components";
import {dateToPrompt, dateToTask} from "../../utils/date";

const StyledTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 0 40px;
  border-bottom: 2px solid #ebebeb;

  h1 {
    font-size: .26em;
    font-weight: 500;
  }

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: .46rem;
    height: .46rem;
    font-size: .40rem;
    color: #ff3131;
    background-color: #fff;
    border: none;
    border-radius: .50rem;
    transition: background-color, .2s;

    @media (hover: hover) {
      &:hover {
        color: #fff;
        background-color: #ff3131;
      }
    }

    &:active {
      color: #fff;
      background-color: #ff3131;
    }
  }
`

const Title = ({tasks, setTasks, selectedDate, setSelectedDate, children}) => {
    const getInputDate = () => {
        const inputDate = prompt('YYYY-NN-DD hh:mm:ss', (dateToPrompt(selectedDate)))
        console.log(inputDate)
        if(inputDate === null) return null
        if (inputDate === '') return selectedDate
        if(!(/\d\d\d\d-\d\d*-\d\d* \d\d:\d\d:\d\d$/).test(inputDate)) return getInputDate()
        return inputDate
    }

    const addTask = () => {
        const inputDate = getInputDate()
        if (!inputDate) {
            return
        }
        const task = dateToTask(new Date(inputDate))
        if (tasks.includes(task)) {
            return
        }
        setSelectedDate(new Date(inputDate))
        setTasks([...tasks, task])
    }

    return (
        <StyledTitle>
            <h1>{children}</h1>
            <button onClick={addTask}>+</button>
        </StyledTitle>
    );
};

export default Title;