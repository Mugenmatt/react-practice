import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from 'gsap';

const MAX_COUNTS: number = 10;

interface UseCounterProps {
    maxCount: number;
}

export const useCounter = ( { maxCount }: UseCounterProps ) => {

    // Esta logica es la misma del componente CounterRefConAnimacion
    // pero la usamos directamente aca para pasarselo al componente
    // CounterHook y poder limpiar el componente de tanto codigo
    // Ademas de que ahora se puede reutilizar

     // El tipo se sabe dejando el cursor encima del elemento que da error
    // Siempre debe inicializarse. El valor por defecto es null
    const elementToAnimate = useRef<any>(null)
    const timelineElement = useRef(gsap.timeline())


    const [ counter, setCounter ] = useState( 0 );

    const handleClick = () => {
        // Solucion 1
        // if(counter >= MAX_COUNTS) return;
        
        // Solucion 2
        // Math.min toma el valor minimo de prev+1 y MAX_COUNTS
        setCounter(prev => Math.min(prev + 1, MAX_COUNTS))
    };
  
    // La diferencia con useEffect es que este se ejecuta
    // despues de que se construyo el HTML

    // ! Lo ideal es que useEffect y useLayoutEffect se encarguen
    // ! cada uno de una sola cosa

    // ! Solo configura la animacion y lo hace una sola vez
    useLayoutEffect(() => {

        console.log('counter elem: ', elementToAnimate.current);
        
        if(!elementToAnimate.current) return

        // Para usar la referencia se usa el ".current"
        timelineElement.current.to(elementToAnimate.current, { y: -10, duration: 0.2, ease: "ease.out" })
                               .to(elementToAnimate.current, { y: 0, duration: 1, ease: "bounce.out" })
        // Hay otros
        // timeline.play()
  
        return () => {}
      }, [])

      // ! Solo se encarga de reproducir la animacion
      // ! cuando el counter cambia
      useEffect(() => {
        timelineElement.current.play(0)
        return () => {}
      }, [counter])
      


    return {
        counter: counter,
        elementToAnimate,
        handleClick,
    }
}
