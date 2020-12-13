import { connect } from 'react-redux'
import CalendarBoard from './presentation'
import { createCalendar } from '../../services/calendar'
import {
  addScheduleOpenDialog,
  addScheduleSetValue
} from '../../redux/addSchedule/actions'
import {
  currentScheduleSetItem,
  currentScheduleOpenDialog
} from '../../redux/currentSchedule/actions'
import { setSchedules } from '../../services/schedule'

const mapStateToProps = (state) => ({
  calendar: state.calendar,
  schedules: state.schedules
})

const mapDispatchToProps = (dispatch) => ({
  openAddScheduleDialog: (date) => {
    dispatch(addScheduleOpenDialog())
    dispatch(addScheduleSetValue({ date }))
  },
  openCurrentScheduleDialog: (schedule, e) => {
    e.stopPropagation()

    dispatch(currentScheduleSetItem(schedule))
    dispatch(currentScheduleOpenDialog())
  }
})

const mergeProps = (stateProps, dispatchProps) => {
  const {
    calendar: month,
    schedules: { items: schedules }
  } = stateProps

  const calendar = setSchedules(createCalendar(month), schedules)

  return {
    ...stateProps,
    ...dispatchProps,
    calendar,
    month
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalendarBoard)