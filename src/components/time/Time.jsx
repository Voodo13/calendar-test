import React from 'react';
import styled from "styled-components";
import {dateToTask, getDate, getDatesOfWeek, getHoursOfDay} from "../../utils/date";
import Legend from "./Legend";

const StiledTimeSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`
const StiledColumn = styled.div`
  display: grid;
  grid-template-rows: repeat(24, .40rem);
  border-right: 2px solid #ebebeb;

  &:last-child {
    border: none;
  }
`
const StiledHour = styled.div`
  border-bottom: 2px solid #ebebeb;
  padding: 2px;
  background-color: ${(props) => props.$isSelect ? '#B3B7FF' : 'inherit'};

  div {
    height: 100%;
    background-color: ${(props) => props.$isTask ? '#EBECFF' : 'inherit'};
    width: 100%;
  }

`
const StiledTime = styled.div`
  display: grid;
  grid-template-columns: .50rem auto;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-clip: content-box;
    border-radius: 9999px;
    background-color: #aaa;
  }
`


const Time = ({tasks, selectedDate, setSelectedDate}) => {
    const datesOfWeek = getDatesOfWeek(selectedDate)

    const getHourComponents = (date) => {
        const hoursOfDay = getHoursOfDay(date)
        return hoursOfDay.map((hour) => {
                const isTask = tasks.includes(dateToTask(hour))
                const isSelect = dateToTask(hour) === dateToTask(selectedDate)

                return (
                    <StiledHour key={getDate(hour).h} $isSelect={isSelect} $isTask={isTask}>
                        <div onClick={() => {
                            setSelectedDate(hour)
                        }}></div>
                    </StiledHour>
                )
            }
        )
    }

    const getColumnComponents = (daysOfWeek) =>
        daysOfWeek.map((date) => {
            const {nameOfWeekDay} = getDate(date)
            return (
                <StiledColumn key={nameOfWeekDay}>
                    {getHourComponents(date)}
                </StiledColumn>
            )
        })

    return (
        <StiledTime>
            <Legend/>
            <StiledTimeSelector>
                {getColumnComponents(datesOfWeek)}
            </StiledTimeSelector>
        </StiledTime>
    );
};

export default Time;