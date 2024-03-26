import { useReducer } from 'react';
import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './state/counterReducer';
import { actions } from './actions/actions';

// ! 1) Click en boton de agregar 1 ejecuta handleAdd
// ! 2) La funcion despacha (dispatch del useReducer) una accion, en este caso actions.doIncrease
// ! 3) doIncrease (creador de accion) dice que devuelve el tipo 'increaseBy' y el payload (en este caso un numero) enviado desde handleAdd
// ! 4) Llega a la funcion del reducer (counterReducer) y esta segun el tipo, ejecuta la accion. Si tiene payload, lo usa.

const INITIAL_STATE: CounterState = {
  counter: 0, // valor actual
  previous: 0, // valor previo
  changes: 0, // cantidad de cambios
};

export const CounterReducerComponent = () => {

  // useReducer se usa en reemplazo de useState cuando el estado es complejo

  // Parametros: funcion pura, estado inicial y 
  // Nota: Funcion pura significa que solo usa data que esta dentro de la funcion
  // y no de afuera, es decir, solo parametros y lo que este dentro de la funcion
  const [counter, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleAdd = (addingValue: number) => {
        dispatch( actions.doIncrease(addingValue) )
    };

    const handleReset = () => {
        dispatch( actions.doReset() )
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
