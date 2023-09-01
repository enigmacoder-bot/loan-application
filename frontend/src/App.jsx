import GetDetails from "./pages/GetDetails";
import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SubmitPage from "./pages/SubmitPage";
import Outcome from "./pages/Outcome";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<SubmitPage />} />
        <Route path="/getdetails" element={<GetDetails />} />
        <Route path="/outcome" element={<Outcome />} />
      </Routes>
    </Router>
  );
}

export default App;
