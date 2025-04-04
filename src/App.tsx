import { Route, Routes } from "react-router";
import Navbar from "./components/navbar";
import Home from "./page/home";
import Footer from "./components/footter";
import Register from "./page/register";
import Detail from "./page/detail ";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
