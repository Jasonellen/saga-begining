import { put,select,call } from 'redux-saga/effects'
import CounterActions1 from '../redux/counterReducer1'

// attempts to get state
// const getState = (state) => state.login

// let API={
// 	request:(text)=>{
// 		return fetch(...)
// 	}
// }

export function * counterPlus1 (action) {
	// const data = yield select(selectState) //通过select可以获取全局state

  // const check = yield call(API.request, text) //如果有异步请求，用call调用
  // if(check.ok == 'ok'){
  // 	yield put(CounterActions1.xxx(xxx, xxx))
  // }
   const {text} = action
   alert(text)
   yield put(CounterActions1.plusNum(2))

}

export function * counterMinus1 (action) {
   const {text} = action
   alert(text)
   yield put(CounterActions1.minusNum())

}
