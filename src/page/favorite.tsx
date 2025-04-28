// Favorites.tsx
import React from "react";
import Card from "../components/card";

type FavoritesProps = {
  favorites: any[]; // The array of favorite stories
  onRemove: (story: any) => void; // Function to remove from favorites
};

const Favorites = ({ favorites = [], onRemove }: FavoritesProps) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Favorites</h2>
      {favorites.length === 0 ? (
        <div className="text-center text-gray-600 py-8">No favorites yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((story) => (
            <Card
              key={story.id}
              story={story}
              onFavorite={() => onRemove(story)} // Use the remove function
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
