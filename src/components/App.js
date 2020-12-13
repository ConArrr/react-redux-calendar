import rootReducer from '../redux/rootReducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import CalendarBoard from './CalendarBoard/container'
import Navigation from './Navigation/container'

import dayjs from 'dayjs'
import 'dayjs/locale/ja'

dayjs.locale("ja")

const store = createStore(rootReducer)

const App = () => (
  <Provider store={store}>
    <Navigation />
    <CalendarBoard />
  </Provider>
)

export default App;