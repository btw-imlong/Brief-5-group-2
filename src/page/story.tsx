import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import StoryCard from "../components/card"; // Your StoryCard component

// StoryFilter component
function StoryFilter({
  onFilterChange,
}: {
  onFilterChange: (filters: any) => void;
}) {
  const [search, setSearch] = useState("");
  const [storyTypes, setStoryTypes] = useState<any[]>([]);
  const [ageGroups, setAgeGroups] = useState<any[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<any[]>([]);
  const [selectedAges, setSelectedAges] = useState<any[]>([]);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const [typeRes, ageRes] = await Promise.all([
          axios.get("http://62.72.46.248:1337/api/story-types"),
          axios.get("http://62.72.46.248:1337/api/age-ranges"),
        ]);
        setStoryTypes(typeRes.data.data || []);
        setAgeGroups(ageRes.data.data || []);
      } catch (error) {
        console.error("Error fetching filters:", error);
      }
    };

    fetchFilters();
  }, []);

  useEffect(() => {
    onFilterChange({ search, types: selectedTypes, ages: selectedAges });
  }, [search, selectedTypes, selectedAges, onFilterChange]);

  const handleTypeChange = (typeId: string) => {
    setSelectedTypes((prev) =>
      prev.includes(typeId)
        ? prev.filter((id) => id !== typeId)
        : [...prev, typeId]
    );
  };

  const handleAgeChange = (ageId: string) => {
    setSelectedAges((prev) =>
      prev.includes(ageId)
        ? prev.filter((id) => id !== ageId)
        : [...prev, ageId]
    );
  };

  return (
    <div className="p-6 bg-gray-100">
      <input
        type="text"
        placeholder="Search stories..."
        className="w-full p-3 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="mt-4 flex flex-col gap-6">
        <div className="flex flex-row gap-3">
          <h3 className="font-bold text-lg sm:text-2xl">Story Type:</h3>
          <div className="flex flex-wrap gap-3 text-sm sm:text-lg mt-1">
            {storyTypes.map((type) => (
              <label key={type.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-gray-500 w-4 h-4 sm:w-5 sm:h-5"
                  checked={selectedTypes.includes(type.id)}
                  onChange={() => handleTypeChange(type.id)}
                />
                {type.attributes?.name || type.name}
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-row gap-3">
          <h3 className="font-bold text-lg sm:text-2xl">Age Range:</h3>
          <div className="flex flex-wrap gap-3 text-sm sm:text-lg mt-1">
            {ageGroups.map((age) => (
              <label key={age.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-gray-500 w-4 h-4 sm:w-5 sm:h-5"
                  checked={selectedAges.includes(age.id)}
                  onChange={() => handleAgeChange(age.id)}
                />
                {age.attributes?.label || age.label}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// StoryPage (main)
export default function StoryPage() {
  const [stories, setStories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ search: "", types: [], ages: [] });
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const fetchStories = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "http://62.72.46.248:1337/api/stories?populate=*"
        );
        const json = await response.json();
        setStories(json.data || []);
      } catch (error) {
        console.error("Failed to fetch stories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  const handleFilterChange = useCallback((newFilters: any) => {
    setFilters(newFilters);
  }, []);

  const handleFavorite = (story: any) => {
    const isAlreadyFavorited = favorites.some((fav) => fav.id === story.id);
    if (!isAlreadyFavorited) {
      setFavorites((prev) => [...prev, story]);
    }
  };

  const filteredStories = stories.filter((story) => {
    const data = story.attributes || story;
    const titleMatch = data.title
      ?.toLowerCase()
      .includes(filters.search.toLowerCase());
    const summaryMatch = data.summary
      ?.toLowerCase()
      .includes(filters.search.toLowerCase());

    const typeMatch =
      filters.types.length === 0 ||
      (data.story_type && filters.types.includes(data.story_type.id));

    const ageMatch =
      filters.ages.length === 0 ||
      (data.age_range && filters.ages.includes(data.age_range.id));

    return (titleMatch || summaryMatch) && typeMatch && ageMatch;
  });

  if (loading) {
    return <div className="text-center p-4">Loading stories...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <StoryFilter onFilterChange={handleFilterChange} />
      <div className="p-4">
        {filteredStories.length === 0 ? (
          <div className="text-center text-gray-600 py-8">
            No stories found matching your criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredStories.map((story: any) => (
              <StoryCard
                key={story.id}
                story={story}
                onFavorite={handleFavorite}
                isFavorited={favorites.some((fav) => fav.id === story.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
