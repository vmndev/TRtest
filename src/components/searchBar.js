import React, { useState } from "react";

import { getSearchResults } from "../apis/searchApi";
import { useDebounce } from "../utils/useDebounce";

import styles from "./searchStyles.module.scss";

export const SearchBar = ({ onChange = () => {} }) => {
  const [inputValue, setInputValue] = useState("");

  const queryData = () => {
    getSearchResults(inputValue).then((response) => onChange(response));
  };

  const debouncedServerQuery = useDebounce(queryData, 500);

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);

    debouncedServerQuery();
  };

  return (
    <div className={styles.searchBarWrapper}>
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
};
