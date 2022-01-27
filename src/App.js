import ComponentWrapper from "./components/ComponentWrapper/ComponentWrapper";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VacuActive from "./components/ComponentWrapper/components/vacu-active/vacuActive";
import VenusViva from "./components/ComponentWrapper/components/venus-viva/VenusViva";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<ComponentWrapper />} />
          <Route path="/vacu-active" element={<VacuActive />} />
          <Route path="/venus-viva" element={<VenusViva />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
