//Search the website for a keyword

import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => {
        //search the website for the keyword
      }}>Search</button>
    </div>
  );
}
