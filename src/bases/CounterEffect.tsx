import { useEffect, useState } from 'react';

interface CounterProps {
    initValue: number;
}

export const CounterEffect = ({ initValue }: CounterProps) => {

    const MAX_COUNTS: number = 10;

    const [counter, setCounter] = useState( initValue );

    const handleClick = () => {
        // Solucion 1
        // if(counter >= MAX_COUNTS) return;
        
        // Solucion 2
        // Math.min toma el valor minimo de prev+1 y MAX_COUNTS
        setCounter(prev => Math.min(prev + 1, MAX_COUNTS))
    };

    useEffect(() => {
      
        // log estilizado
        console.log('%cSe llego al valor maximo', 'color: red; background-color: #000;');
      
      // return () => {
      //   
      // }
    }, [counter])
    

  return (
    <>
        <h1>Counter Effect: { counter }</h1>
        <button onClick={ handleClick }> Sumar </button>
    </>
  )
}
