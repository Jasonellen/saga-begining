import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  plusNum: ['text'], //type名驼峰，生成的是全大写PLUS_NUM
  minusNum: null,
  plusNumSaga: ['text'],
  minusNumSaga: ['text'],
})

export const CounterTypes1 = Types //这里导出是给saga监听使用
export default Creators
//导出action生成器 Creators，
//Creators.plusNum =(text) => {type:'PLUS_NUM' ,text:text}

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  value:0
})

/* ------------- Reducers ------------- */

export const plus = (state,action) => {
  const { text } = action
  return state.merge({ value:state.value+text })
}
export const minus = (state,action) => {
  return state.merge({ value:state.value-1 })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PLUS_NUM]: plus,
  [Types.MINUS_NUM]: minus
  //这里reducer监听Types是PLUS_NUM的action,执行对应的plus放法
})
// reducer生成器，生成对应type的reducer
