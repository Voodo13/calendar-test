import React from 'react';
import styled from "styled-components";
import {dateToTask} from "../../utils/date";

const StiledFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 0 40px;
  background-color: #f6f6f6;
  border-top: 2px solid #ebebeb;
  font-size: .24rem;

  button {
    color: #FE4747;
    background-color: inherit;
    font-size: .24rem;
    border: none;

    @media (hover: hover) {
      &:hover {
        color: #ff0000;
      }
    }

    &:active {
      color: #fd0000;
    }
  }
`

const Footer = ({tasks, setTasks, selectedDate, setSelectedDate}) => {
    const currentTask = dateToTask(selectedDate)
    const isDeletable = tasks.includes(currentTask)

    const setToday = () => setSelectedDate(new Date())

    const deleteTask = () => setTasks(
        tasks.filter(
            (task) => task !== currentTask
        ))

    return (
        <StiledFooter>
            <button onClick={setToday}>Today</button>
            {isDeletable &&
                <button onClick={deleteTask}>Delete</button>
            }
        </StiledFooter>
    );
};

export default Footer;