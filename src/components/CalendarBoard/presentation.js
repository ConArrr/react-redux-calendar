import CalendarElement from '../CalendarElement/index'
import {
  GridList,
  Typography
} from '@material-ui/core'
import './style.css'

const youbis = ["日", "月", "火", "水", "木", "金", "土"]

const CalendarBoard = ({ calendar, month, openAddScheduleDialog }) => {
  return (
    <div className="container">
      <GridList className="grid" cols={7} spacing={0} cellHeight="auto">
        {
          youbis.map((youbi, index) => (
            <li key={index}>
              <Typography
                className="days"
                color="textSecondary"
                align="center"
                variant="caption"
                component="div"
              >
                {youbi}
              </Typography>
            </li>
          ))
        }
        {
          calendar.map((day) => (
            <li key={day.toISOString()} onClick={() => openAddScheduleDialog()}>
              <CalendarElement day={day} month={month} />
            </li>
          ))
        }
      </GridList>
    </div>
  )
}

export default CalendarBoard