import React from "react";
import Button from "./components/button";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="button" element={<Button />} />
      </Routes>
    </>
  );
}

export default App;
