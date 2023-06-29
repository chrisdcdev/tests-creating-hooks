import reactLogo from "../../assets/react.svg";
import Hook from "../../assets/hook.png";
import "../../App.css";
import { useNavigate } from "react-router-dom";

export default function InitialPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Hooks + React</h1>
      <div>
        <img src={Hook} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h2>Exemplos:</h2>
      <div className="card">
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <button
            onClick={() => {
              navigate("/use-state");
            }}
          >
            useState
          </button>
          <button
            onClick={() => {
              navigate("/use-effect");
            }}
          >
            useEffect
          </button>
          <button
            onClick={() => {
              navigate("/use-memo");
            }}
          >
            useMemo
          </button>
          <button
            onClick={() => {
              navigate("/use-ref");
            }}
          >
            useRef
          </button>
        </div>
      </div>
      <p className="read-the-docs">
        1ª Mentoria ReactJS - Boavista Tecnologia | Dia 7
      </p>
    </div>
  );
}
