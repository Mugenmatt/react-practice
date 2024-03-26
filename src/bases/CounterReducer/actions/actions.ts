export const ACTION_RESET = 'reset';
export const ACTION_INCREASE = 'increseBy';

export type CounterAction = 
    | { type: 'increseBy', payload: { value: number }  } 
    | { type: 'reset' }

const doReset = (): CounterAction => {
    return { type: ACTION_RESET }
}

const doIncrease = (addingNumber: number): CounterAction => {
    return { type: ACTION_INCREASE, payload: { value: addingNumber } }
}

export const actions = {
    doReset,
    doIncrease
}