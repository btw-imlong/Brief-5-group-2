import { Route, Routes } from "react-router";
import Navbar from "./components/navbar";
import Home from "./page/home";
import Footer from "./components/footter"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;