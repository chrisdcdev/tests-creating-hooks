import reactLogo from "../../assets/react.svg";
import Hook from "../../assets/hook.png";
import "../../App.css";
import CounterWithoutNewHooks from "../../components/CounterWithoutNewHooks";
import { CounterUsingNewHooks } from "../../components/CounterUsingNewHooks";

export default function UseStateExample() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <img src={Hook} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Hooks + React</h1>
      <div className="card">
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <CounterUsingNewHooks />
          <CounterWithoutNewHooks />
        </div>
      </div>
      <p className="read-the-docs">
        1ª Mentoria ReactJS - Boavista Tecnologia | Dia 7
      </p>
    </div>
  );
}
