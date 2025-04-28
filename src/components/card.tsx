import React, { useState } from "react";
import { Heart } from "lucide-react";

type StoryCardProps = {
  onFavorite: (story: any) => void; // Function to add to favorites
  story: any; // Story data passed from parent
};

const StoryCard = ({ story, onFavorite }: StoryCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false); // State to track if story is favorited
  const { title, summary, cover_image } = story.attributes || story;
  const imageUrl = cover_image?.data?.attributes?.url || cover_image?.url;

  const handleFavoriteClick = () => {
    setIsFavorite((prev) => !prev); // Toggle favorite state
    onFavorite(story); // Call the onFavorite function passed from parent
  };

  return (
    <div className="rounded-2xl p-2 shadow-lg overflow-hidden relative">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-contain rounded-t-2xl"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 text-sm line-clamp-2">{summary}</p>
        {/* Heart icon inside the card, clickable */}
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-2 right-2 bg-white p-2 rounded-full ${
            isFavorite ? "text-red-600" : "text-gray-500"
          }`}
        >
          <Heart className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default StoryCard;
