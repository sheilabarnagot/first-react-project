
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/HomePage";
import Taskboard from "./pages/Taskboard/TaskboardPage";

// import Root from "./routes/Root";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/taskboard" element={<Taskboard />} />
      </Routes>
    </Router>
  );
}

export default App;
