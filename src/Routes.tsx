import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import InitialPage from "./pages/InitialPage";
import UseMemoExample from "./pages/UseMemoExample";
import UseStateExample from "./pages/UseStateExample";
import UseEffectExample from "./pages/UseEffectExample";
import UseRefExample from "./pages/useRefExample";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/use-memo" element={<UseMemoExample />} />
        <Route path="/use-state" element={<UseStateExample />} />
        <Route path="/use-effect" element={<UseEffectExample />} />
        <Route path="/use-ref" element={<UseRefExample />} />
      </Routes>
    </Router>
  );
}
