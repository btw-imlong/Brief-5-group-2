import { Route, Routes } from "react-router-dom";
import Navbar from "./layout/navbar";
import Footer from "./layout/footter"; // Fixed typo: 'footter' to 'footer'
import Home from "./page/home";
import Login from "./Auth/login";
import Favorites from "./page/favorite";
import Register from "./Auth/register";
import StoryDetail from "./page/storydetail";
import StoryCard from "./page/story"; // Story card component
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
        {/* Story Detail route */}
        <Route path="/story/:documentId" element={<StoryDetail />} />
        {/* Register route */}
        <Route path="/register" element={<Register />} />
        {/* Story Card route with add to favorite functionality */}
        <Route
          path="/story"
          element={<StoryCard onAddFavorite={handleAddFavorite} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
