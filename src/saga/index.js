import { takeLatest } from 'redux-saga/effects'

/* ------------- Types ------------- */
import { CounterTypes1 } from '../redux/counterReducer1'
import { CounterTypes2 } from '../redux/counterReducer2'

/* ------------- Sagas ------------- */
import { counterPlus1, counterMinus1 } from './counterSaga1'
import { counterPlus2, counterMinus2 } from './counterSaga2'


/* ------------- Connect Types To Sagas ------------- */
export default function * rootSaga () {
  yield [
    takeLatest(CounterTypes1.PLUS_NUM_SAGA, counterPlus1),
    takeLatest(CounterTypes1.MINUS_NUM_SAGA, counterMinus1),
    takeLatest(CounterTypes2.PLUS_NUM_SAGA2, counterPlus2),
    takeLatest(CounterTypes2.MINUS_NUM_SAGA2, counterMinus2),
  ]
}
