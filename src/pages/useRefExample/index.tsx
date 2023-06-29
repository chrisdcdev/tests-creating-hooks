import { useRef } from "react";

export default function UseRefExample() {
  const inputRef = useRef<HTMLInputElement>(null);

  function hancleClick() {
    if (inputRef.current) {
      //   inputRef.current.focus();
      inputRef.current.value = "Teste teste";
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <input ref={inputRef} type="text" />
      <button onClick={() => hancleClick()}>Clique aqui</button>
    </div>
  );
}
