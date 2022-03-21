import { ActionType } from "../action-types";
import { Action } from "../actions";

export interface IState {
  amount: number
}


const initialState: IState = {
  amount: 0
}

const reducer = (state: IState = initialState, action: Action): IState => {

  console.log(action);

  switch(action.type) {
    case ActionType.DEPOSIT:
      return {
        amount: state.amount + action.payload
      }
      ;
    case ActionType.WITHDRAW:
      return {
        amount: state.amount - action.payload
      }
      ; 
    case ActionType.BANKRUPT:
      return {
        amount: 0
      };
    default:
      return state
  }
}

export default reducer

