import { Route, Routes } from "react-router";
import Navbar from "./components/navbar";
import Home from "./page/home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
