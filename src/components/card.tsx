import React, { useState } from "react";
import { Heart, X } from "lucide-react";

const Card = ({ title, description, image, time, onFavorite, onRemove }) => {
  return (
    <div className="rounded-2xl shadow-lg p-4 max-w-xs bg-white relative">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="rounded-t-2xl w-full h-48 object-cover"
        />
        {onFavorite && (
          <button
            onClick={onFavorite}
            className="absolute top-2 right-2 bg-white rounded-full p-1"
          >
            <Heart className="w-5 h-5 text-black" />
          </button>
        )}
        {onRemove && (
          <button
            onClick={onRemove}
            className="absolute top-2 right-2 bg-white rounded-full p-1"
          >
            <X className="w-5 h-5 text-red-600" />
          </button>
        )}
      </div>
      <div className="p-3">
        <h2 className="text-lg font-bold mb-1">{title}</h2>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-gray-400 text-sm">{time}</p>
      </div>
    </div>
  );
};

const FavoritesPage = ({ favorites, removeFavorite }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Favorites</h2>
      <div className="flex flex-wrap gap-4">
        {favorites.map((fav, index) => (
          <Card key={index} {...fav} onRemove={() => removeFavorite(index)} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const handleFavorite = (card) => {
    setFavorites((prev) => [...prev, card]);
  };

  const removeFavorite = (index) => {
    setFavorites((prev) => prev.filter((_, i) => i !== index));
  };

  const cardData = {
    title: "Jack and the Beanstalk",
    description:
      "A magic bean leads Jack to uncover a world he knew nothing about.",
    image:
      "https://files.datathistle.com/images/2022/12/07/01787-16702736879758-m-LST537327.png",
    time: "16 mins",
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <button
        onClick={() => setShowFavorites((prev) => !prev)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {showFavorites ? "Back to Home" : "View Favorites"}
      </button>
      {showFavorites ? (
        <FavoritesPage favorites={favorites} removeFavorite={removeFavorite} />
      ) : (
        <Card {...cardData} onFavorite={() => handleFavorite(cardData)} />
      )}
    </div>
  );
};

export default App;
