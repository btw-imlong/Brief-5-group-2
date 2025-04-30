import { Route, Routes } from "react-router-dom";
import Navbar from "./layout/navbar"; // Corrected path if needed
import Footer from "./layout/footter"; // Corrected path if needed
import Home from "./page/home"; // Corrected path if needed
import Login from "./Auth/login"; // Corrected path if needed
import Favorites from "./page/favorite"; // Corrected path if needed
import Register from "./Auth/register"; // Corrected path if needed
import Detail from "./page/storydetail"; // Corrected path if needed
import StoryCard from "./page/story"; // Corrected path if needed
import React, { useState } from "react";

function App() {
  const [favorites, setFavorites] = useState<any[]>([]);

  // Function to add a story to favorites
  const handleAddFavorite = (story: any) => {
    if (!favorites.some((fav) => fav.id === story.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, story]);
    }
  };

  // Function to remove a story from favorites
  const handleRemoveFavorite = (story: any) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== story.id)
    );
  };

  return (
    <>
      <Navbar />
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />
        {/* Login route */}
        <Route path="/login" element={<Login />} />
        {/* Favorites route */}
        <Route
          path="/favorite"
          element={
            <Favorites favorites={favorites} onRemove={handleRemoveFavorite} />
          }
        />
        {/* Register route */}
        <Route path="/register" element={<Register />} />
        {/* Story detail route */}
        <Route path="/detail" element={<Detail />} />
        {/* Story page route, passing handleAddFavorite */}
        <Route
          path="/story"
          element={<StoryCard onFavorite={handleAddFavorite} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
