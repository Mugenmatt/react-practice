import { useReducer } from 'react';

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0, // valor actual
  previous: 0, // valor previo
  changes: 0, // cantidad de cambios
};

const ACTION_TYPE: string = 'increseBy';

type CounterAction = | { type: 'increseBy', payload: { value: number }  } | { type: 'reset' }

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'increseBy':
      return {
        counter: state.counter + action.payload.value,
        previous: state.counter,
        changes: state.changes
      }
    case 'reset':
      return {
        counter: 0,
        previous: state.counter,
        changes: state.changes
      }
  
    default:
      return state
  }
}

export const CounterReducerComponent = () => {

  // useReducer se usa en reemplazo de useState cuando el estado es complejo

  // Parametros: funcion pura, estado inicial y 
  // Nota: Funcion pura significa que solo usa data que esta dentro de la funcion
  // y no de afuera, es decir, solo parametros y lo que este dentro de la funcion
  const [counter, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleAdd = (addingValue: number) => {
        dispatch({type: 'increseBy', payload: { value: addingValue } })
    };

    const handleReset = () => {
        dispatch({type: 'reset' })
    };

  return (
    <>
        <h1>Counter Reducer: { counter.counter }</h1>
        <button onClick={ () => handleAdd(1) }> Increase By 1 </button>
        <button onClick={ () => handleAdd(5) }> Increase By 5 </button>
        <button onClick={ () => handleAdd(10) }> Increase By 10 </button>
        <button onClick={ handleReset }> Reset </button>
    </>
  )
}
