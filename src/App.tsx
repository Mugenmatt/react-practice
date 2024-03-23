import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from './bases/CounterEffect';
import { CounterRefConAnimacion } from './bases/CounterRefConAnimacion';
import { CounterHook } from './bases/CounterHook';
import { CounterReducerComponent } from './bases/CounterReducerComponent';

function App() {
  return (
    <>
      <Counter initValue={10} />
      <CounterBy initValue={10} />
      <CounterEffect initValue={0} />
      <CounterRefConAnimacion initValue={0} />
      <CounterHook />
      <CounterReducerComponent />
    </>
  );
}

export default App;
