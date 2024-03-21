import { useState } from 'react';

interface CounterProps {
    initValue: number;
}

interface CounterState {
    counter: number;
    clicks: number;
}

export const CounterBy = ({ initValue = 5 }: CounterProps) => {

    // Destructuracion del estado + Darle tipo
    const [{ counter, clicks }, setCounterState] = useState<CounterState>({
        counter: initValue,
        clicks: 0
    });

    const handleClick = (value: number) => {
        setCounterState(({ counter, clicks }) =>  ({
            counter: counter + value, 
            clicks: clicks + 1
        }))
    };

    const handleReset = () => {
        setCounterState(prev =>  ({
            counter: 0, 
            clicks: clicks + 1
        }))
    };

  return (
    <>
        <h1>Counter By: { counter }</h1>
        <h1>Clicks: { clicks }</h1>
        <button onClick={ () => handleClick(1) }> Sumar 1 </button>
        <button onClick={ () => handleClick(5) }> Sumar 5 </button>
        <button onClick={ () => handleReset() }> Reset </button>
    </>
  )
}
