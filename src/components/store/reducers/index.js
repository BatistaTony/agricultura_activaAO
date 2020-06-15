import { combineReducers } from 'redux'
import Farm from './farm'
import Harvest from './harvest'

const allReducers = combineReducers({
    Farm,
    Harvest
})

export default allReducers