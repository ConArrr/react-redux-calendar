import dayjs from 'dayjs'
import './style.css'
import { isSameMonth, isFirstDay, isSameDay, getMonth } from '../../services/calendar'

import { Typography } from '@material-ui/core'

import Schedule from '../Schedule'

const CalendarElement = ({ day, month, schedules, ...props }) => {
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
      <div className="schedules">
        {
          schedules.map(e => (
            <Schedule key={e.id} schedule={e} {...props} />
          ))
        }
      </div>
    </div>
  )
}

export default CalendarElement