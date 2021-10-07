import { useState } from "react";

import { SearchBar } from "./components/searchBar";
import { Results } from "./components/results";

export const App = () => {
  const [results, setResults] = useState([]);

  return (
    <>
      <SearchBar onChange={setResults} />
      <Results results={results} />
    </>
  );
};
