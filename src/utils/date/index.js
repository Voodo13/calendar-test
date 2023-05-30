const getDate = (date = new Date(), locale = "en-US") => {
    const month = date.getMonth()
    const nameOfMont = date.toLocaleString(locale, {month: 'long'})
    const year = date.getFullYear()
    const numberOfWeekDay = date.getDay()
    const nameOfWeekDay = date.toLocaleString(locale, {weekday: 'long'})
    const day = date.getDate()
    const fullDate = date.toLocaleString().split(',')[0].trim()
    const time = date.toLocaleString().split(',')[1].trim()
    const h = time.split(':')[0]
    const m = time.split(':')[1]
    const s = time.split(':')[2]
    return {time, h, m, s, fullDate, day, nameOfWeekDay, numberOfWeekDay, month, nameOfMont, year}
}

const getDatesOfWeek = (date = new Date()) => {
    const {day, numberOfWeekDay, month, year} = getDate(date)
    const datesOfWeek = []
    const firstDay = numberOfWeekDay !== 0 ? day - numberOfWeekDay + 1 : day - 6
    for (let i = 0; i < 7; i += 1) {
        datesOfWeek.push(new Date(year, month, firstDay + i, 12))
    }
    return datesOfWeek
}

const getHoursOfDay = (date) => {
    const {day, month, year} = getDate(date)
    const hours = []
    for (let i = 0; i < 24; i += 1) {
        hours.push(new Date(year, month, day, i))
    }
    return hours
}

const dateToTask = (date) => `${getDate(date).fullDate} ${getDate(date).h}:00`

const dateToPrompt = (date) => {
    const {h, day, month, year} = getDate(date)
    return `${year}-${month + 1}-${day} ${h}:00:00`
}


export {getDate, getDatesOfWeek, getHoursOfDay, dateToTask, dateToPrompt}