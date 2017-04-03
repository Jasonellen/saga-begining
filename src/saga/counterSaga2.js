import { put,select,call } from 'redux-saga/effects'
import CounterActions2 from '../redux/counterReducer2'

// attempts to get state
// const getState = (state) => state.login

// let API={
// 	request:(text)=>{
// 		return fetch(...)
// 	}
// }

export function * counterPlus2 (action) {
	// const data = yield select(selectState) //通过select可以获取全局state

  // const check = yield call(API.request, text) //如果有异步请求，用call调用
  // if(check.ok == 'ok'){
  // 	yield put(CounterActions1.xxx(xxx, xxx))
  // }
   const {text} = action
   alert(text)
   yield put(CounterActions2.plusNum2(3))

}

export function * counterMinus2 (action) {
   const {text} = action
   alert(text)
   yield put(CounterActions2.minusNum2())

}
