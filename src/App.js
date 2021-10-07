import { useState } from "react";

import { SearchBar } from "./components/searchBar";
import { Results } from "./components/results";

import styles from "./App.module.scss";

export const App = () => {
  const [results, setResults] = useState([]);

  return (
    <div className={styles.searchAppWrapper}>
      <SearchBar onChange={setResults} />
      <Results results={results} />
    </div>
  );
};
