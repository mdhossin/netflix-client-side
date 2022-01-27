import "./App.scss";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages";
import Register from "./components/register/Register";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <Login></Login>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie" element={<Home />}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
