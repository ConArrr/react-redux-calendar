import { isSameDay } from './calendar'

export const setSchedules = (calendar, schedules) => 
  calendar.map((date) => ({
    date,
    schedules: schedules.filter(e => isSameDay(e.date, date))
  })
)