import React from "react";
import buttons from "./components/button";

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
