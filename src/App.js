import styled from "styled-components";
import Title from "./components/title/Title";
import Calendar from "./components/calendar/Calendar";
import {useEffect, useState} from "react";
import Time from "./components/time/Time";
import Footer from "./components/footer/Footer";

const AppWrapper = styled.div`
  max-width: 740px;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  display: grid;
  grid-auto-rows: 100px 140px auto 100px;
`

function App() {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('calendar')) || [])
    const [selectedDate, setSelectedDate] = useState(new Date())

    useEffect(() => {
        localStorage.setItem('calendar', JSON.stringify(tasks))
    }, [tasks])

    const props = {
        tasks,
        setTasks,
        selectedDate,
        setSelectedDate
    }

    return (
        <AppWrapper>
            <Title {...props}>
                Interview Calendar
            </Title>
            <Calendar {...props} />
            <Time {...props} />
            <Footer {...props} />
        </AppWrapper>
    );
}

export default App;
