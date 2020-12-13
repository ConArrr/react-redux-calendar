import { connect } from 'react-redux'
import CalendarBoard from './presentation'
import { createCalendar } from '../../services/calendar'
import {
  addScheduleOpenDialog,
  addScheduleSetValue
} from '../../redux/addSchedule/actions'

const mapStateToProps = (state) => ({
  calendar: state.calendar
})

const mapDispatchToProps = (dispatch) => ({
  openAddScheduleDialog: (date) => {
    dispatch(addScheduleOpenDialog())
    dispatch(addScheduleSetValue({ date }))
  }
})

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  month: stateProps.calendar,
  calendar: createCalendar(stateProps.calendar)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalendarBoard)