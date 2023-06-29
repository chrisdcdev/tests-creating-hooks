import { useMemo, useState } from "react";
import UseMemoLogger from "./Logger";

export default function UseMemoExample() {
  const [count, setCount] = useState(0);
  const loggerUsingUseMemo = useMemo(() => <UseMemoLogger />, []);

  return (
    /*
        Sempre que esse componente pai tem seu estado alterado, 
        o componente filho(UseMemoLogger) é montado novamente

        <div>
          <UseMemoLogger />
     
          <h1>{count}</h1>
     
          <button onClick={() => setCount(count + 1)}>Clique aqui</button>
        </div>

    */

    /*
        Dessa forma o componente UseMemoLogger não é remontado 
        sempre que o seu componente pai é atualizado
    */
    <div>
      {loggerUsingUseMemo}

      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Clique aqui</button>
    </div>
  );
}
