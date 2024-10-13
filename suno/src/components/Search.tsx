//Search the website for a keyword

import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

export default function Search() {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    // search the website for the keyword
    console.log("Searching for:", search);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="pl-8 pr-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#f5c242]"
      />
      <SearchIcon
        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 cursor-pointer"
        onClick={handleSearch}
      />
    </div>
  );
}
