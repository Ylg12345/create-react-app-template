import { combineReducers } from 'redux'
import bankReducer from './bankReducer'
import { IState } from './bankReducer'

const reducers = combineReducers({
  bankReducer
})

export default reducers

// type State = ReturnType<typeof reducers>

export interface CombinedState {
  bankReducer: IState
}