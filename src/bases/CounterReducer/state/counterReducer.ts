import { ACTION_INCREASE, ACTION_RESET, CounterAction } from "../actions/actions"
import { CounterState } from "../interfaces/interfaces"

// Necesita el estado y una accion
export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
      case ACTION_INCREASE:
        return {
          counter: state.counter + action.payload.value,
          previous: state.counter,
          changes: state.changes
        }
      case ACTION_RESET:
        return {
          counter: 0,
          previous: 0,
          changes: 0
        }
    
      default:
        return state
    }
  }
  