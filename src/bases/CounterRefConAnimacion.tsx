import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface CounterProps {
    initValue: number;
}

export const CounterRefConAnimacion = ({ initValue }: CounterProps) => {

    // ! Usamos useRef porque si usaramos clases o ID
    // ! para diferenciar elementos, si el componente
    // ! estuviera duplicado, le pegaria a ambos elementos
    // ! cuando solamente queriamos pegarle a 1 de los dos

    // ! useRef no ejecuta el useEffect
    // El tipo se sabe dejando el cursor encima del elemento que da error
    // Siempre debe inicializarse. El valor por defecto es null
    const counterElement = useRef<HTMLHeadingElement>(null)

    const MAX_COUNTS: number = 10;

    const [counter, setCounter] = useState( initValue );


    const handleClick = () => {
        // Solucion 1
        // if(counter >= MAX_COUNTS) return;
        
        // Solucion 2
        // Math.min toma el valor minimo de prev+1 y MAX_COUNTS
        setCounter(prev => Math.min(prev + 1, MAX_COUNTS))
    };

    // La diferencia con useEffect es que este se ejecuta
    // despues de que se construyo el HTML
    useLayoutEffect(() => {
      
      // log estilizado
      console.log('%cCon GSAP', 'color: green; background-color: #000;');
      
      if(counter >= MAX_COUNTS) return;

      // Esta forma no se recomienda
      // gsap.to(counterElement.current, { y: -10, duration: 0.2, ease: "ease.out" }).then(() => {
      //   gsap.to(counterElement.current, { y: 0, duration: 1, ease: "bounce.out" })
      // })

      // El timeline contiene los fx y controla la secuencia de animaciones
      const timeline = gsap.timeline();

      // Para usar la referencia se usa el ".current"
      timeline.to(counterElement.current, { y: -10, duration: 0.2, ease: "ease.out" })
              .to(counterElement.current, { y: 0, duration: 1, ease: "bounce.out" })

      // Hay otros
      // timeline.play()

      return () => {
        
      }
    }, [counter])
    

  return (
    <>
        <h1>Counter Effect c/animacion:</h1>
        <h2 ref={ counterElement }>{ counter }</h2>
        <button onClick={ handleClick }> Sumar </button>
    </>
  )
}
