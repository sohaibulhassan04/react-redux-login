import {combineReducers} from 'redux'
import amountReducer from './amountReducer'
import accountReducer from './accountReducer'

export const reducers = combineReducers({
    amount:amountReducer,
    account:accountReducer
})
export default reducers