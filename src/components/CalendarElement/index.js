import './style.css'

import dayjs from 'dayjs'
import { isFirstDay, isSameDay, isSameMonth, getMonth } from '../../services/calendar'

import { Typography } from '@material-ui/core'

const CalendarElement = ({ day, month }) => {
  const currentMonth = getMonth(month)
  const isCurrentMonth = isSameMonth(day, currentMonth)
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary"

  const format = isFirstDay(day) ? "M月D日" : "D"

  const today = dayjs()
  const isToday = isSameDay(day, today)

  return (
    <div className="element">
      <Typography
        className="date"
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? "today" : ""}>
          { day.format(format) }
        </span>
      </Typography>
    </div>
  )
}

export default CalendarElement