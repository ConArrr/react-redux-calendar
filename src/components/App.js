import rootReducer from '../redux/rootReducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Navigation from './Navigation/container'
import CalendarBoard from './CalendarBoard/container'
import AddScheduleDialog from './AddScheduleDialog/container'
import CurrentScheduleDialog from './CurrentScheduleDialog/container'

import DayjsUtils from '@date-io/dayjs'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

import dayjs from 'dayjs'
import 'dayjs/locale/ja'

dayjs.locale("ja")

const store = createStore(rootReducer)

const App = () => (
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
      <AddScheduleDialog />
      <CurrentScheduleDialog />
    </MuiPickersUtilsProvider>
  </Provider>
)

export default App;