import { useState, useEffect } from "react";
import axios from "axios";

export default function StoryFilter() {
  const [search, setSearch] = useState("");
  const [storyTypes, setStoryTypes] = useState([]);
  const [ageGroups, setAgeGroups] = useState([]);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const [typeRes, ageRes] = await Promise.all([
          axios.get("http://62.72.46.248:1337/api/story-types"),
          axios.get("http://62.72.46.248:1337/api/age-ranges"),
        ]);

        setStoryTypes(typeRes.data.data);
        setAgeGroups(ageRes.data.data);
      } catch (error) {
        console.error("Error fetching filters:", error);
      }
    };

    fetchFilters();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <input
        type="text"
        placeholder="Type to Search ...."
        className="w-[80%] text-black p-3 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="mt-4 flex gap-4">
        <h3 className="font-bold text-2xl">Story Type :</h3>
        <div className="flex flex-wrap gap-3 text-lg">
          {storyTypes.map((type) => (
            <label key={type.id} className="flex items-center gap-2">
              <input type="checkbox" className="accent-gray-500 w-10 h-5" />
              {type.name}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-4 flex gap-4">
        <h3 className="font-bold text-2xl">Ages :</h3>
        <div className="flex flex-wrap gap-3 text-lg">
          {ageGroups.map((age) => (
            <label key={age.id} className="flex items-center gap-2">
              <input type="checkbox" className="accent-gray-500 w-10 h-5" />
              {age.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
