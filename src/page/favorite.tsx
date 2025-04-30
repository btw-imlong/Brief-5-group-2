import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/card"; // Make sure path is correct

const Favorites = () => {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("You must be logged in to view favorites.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          "http://62.72.46.248:1337/api/favorites",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setFavorites(response.data.data || []);
      } catch (err) {
        setError("Failed to fetch favorites. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const handleRemove = async (story: any) => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("You must be logged in to remove favorites.");
      return;
    }

    try {
      const res = await axios.delete(
        `http://62.72.46.248:1337/api/favorites/${story.id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.status === 200) {
        setFavorites((prev) => prev.filter((item) => item.id !== story.id));
      } else {
        setError("Failed to remove favorite. Please try again.");
      }
    } catch (err) {
      setError("Error removing favorite. Please try again.");
    }
  };

  const handleAddFavorite = (story: any) => {
    // Logic for adding a favorite (e.g., making an API call)
    console.log("Adding to favorites:", story);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Favorites</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {loading ? (
        <p className="text-gray-500 text-center">Loading favorites...</p>
      ) : favorites.length === 0 ? (
        <p className="text-gray-500 text-center">No favorites found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((item: any) => (
            <Card
              key={item.id}
              story={item.attributes}
              isFavorite={true} // Pass favorite status down
              onFavorite={() => handleRemove(item)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
