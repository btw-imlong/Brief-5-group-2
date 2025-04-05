import { useState } from "react";

export default function StoryFilter() {
  const [search, setSearch] = useState("");

  const storyTypes = ["Classic", "Adventure", "Funny", "Anime"];
  const ageGroups = ["04-07", "08-10", "11-16", "Teenager"];

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
        <h3 className="font-bold text-2xl ">Story Type :</h3>
        <div className="flex flex-wrap gap-3 text-lg">
          {storyTypes.map((type) => (
            <label key={type} className="flex items-center gap-2 ">
              <input type="checkbox" className="accent-gray-500 w-10 h-5" />
              {type}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-4 flex gap-4">
        <h3 className="font-bold text-2xl">Ages :</h3>
        <div className="flex flex-wrap gap-3 text-lg">
          {ageGroups.map((age) => (
            <label key={age} className="flex items-center gap-2">
              <input type="checkbox" className="accent-gray-500 w-10 h-5" />
              {age}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
