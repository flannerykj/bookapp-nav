'use strict'

// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import {logger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers'
import {NavigatorHomeTab} from './views/home/HomeTabNavigation';
import {NavigatorProfileTab} from './views/profile/ProfileTabNavigation';
import {NavigatorSearchTab} from './views/search/SearchTabNavigation';
import {tabBarReducer} from './views/tabBar/TabBarNavigation'

const middleware = () => {
  return applyMiddleware(logger, thunkMiddleware)
}

export default createStore(
  combineReducers({
    tabBar: tabBarReducer,
    homeTab: (state,action) => NavigatorHomeTab.router.getStateForAction(action,state),
    profileTab: (state,action) => NavigatorProfileTab.router.getStateForAction(action,state),
    searchTab: (state,action) => NavigatorSearchTab.router.getStateForAction(action,state),
    app: reducer
  }),
  middleware(),
)