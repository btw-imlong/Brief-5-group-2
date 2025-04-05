import { Route, Routes } from "react-router";
import Navbar from "./components/navbar";
import Home from "./page/home";
import Footer from "./components/footter";
import Login from "./page/login";
import Favorite from "./page/favorite";
import Register from "./page/register";
import Detail from "./page/storydetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/register" element={<Register />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
