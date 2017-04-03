
import {createLogger} from 'redux-logger';
// const createLogger = require('redux-logger');
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware } from 'redux';
import rootReducer from '../redux'
import rootSaga from '../saga'

const middlewares = [];
// 创建中间件saga
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware)
console.log(process.env)
if (process.env.NODE_ENV === 'development') {
    //创建中间件logger
    const logger = createLogger();
    middlewares.push(logger);
}

export default function configureStore(initialState) {
   const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));
   sagaMiddleware.run(rootSaga) //saga中间键挂在到store后需要run一下 所有的saga文件
   return store;
}
