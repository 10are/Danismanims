import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Authreg from "./pages/Authreg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
    <Router>
      <Routes>
         <Route path="login/" element={<Auth />} />
          <Route path="register/" element={<Authreg />} />
         <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>

  );
}

export default App;
