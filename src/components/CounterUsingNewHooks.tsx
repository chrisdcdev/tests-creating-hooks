import { useState } from "react";

export function CounterUsingNewHooks() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Usando useState</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Clique aqui</button>
    </div>
  );
}
