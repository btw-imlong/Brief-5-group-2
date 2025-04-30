import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

type StoryCardProps = {
  onFavorite: (story: any) => void; // For removing from favorites
  onAddFavorite: (story: any) => void; // For adding to favorites
  story: any;
  isFavorite: boolean; // Track the favorite status passed from the parent
};

const StoryCard = ({
  story,
  onFavorite,
  onAddFavorite,
  isFavorite,
}: StoryCardProps) => {
  const { title, summary, cover_image, documentId } = story.attributes || story;
  const imageUrl = cover_image?.data?.attributes?.url || cover_image?.url;

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent Link navigation
    e.stopPropagation(); // Stop bubbling to parent

    // Call the correct favorite action
    if (isFavorite) {
      onFavorite(story); // Remove from favorites
    } else {
      onAddFavorite(story); // Add to favorites
    }
  };

  return (
    <div className="relative rounded-2xl p-2 shadow-lg overflow-hidden">
      {/* Heart button outside the link */}
      <button
        onClick={handleFavoriteClick}
        className={`absolute top-2 right-2 bg-white p-2 rounded-full z-10 ${
          isFavorite ? "text-red-600" : "text-gray-500"
        }`}
      >
        <Heart className="w-6 h-6" />
      </button>

      <Link to={`/story/${documentId}`} className="block">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title || "Story cover"}
            className="w-full h-48 object-contain rounded-t-2xl"
          />
        )}
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 line-clamp-1">{title}</h3>
          <p className="text-gray-700 text-sm line-clamp-2">
            {summary || "No summary available."}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default StoryCard;
