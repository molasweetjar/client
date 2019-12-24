import { combineReducers, createStore, applyMiddleware, compose } from 'redux'

import categoryStore from './category'
import userStore from './user'

// -------MIDDLEWARE----------
import middleware from '../middleware/'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const combine = combineReducers({ categoryStore, userStore })
export default createStore(combine, composeEnhancers(applyMiddleware(middleware)))