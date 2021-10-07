import React from "react";

import styles from "./searchStyles.module.scss";

export const Results = ({ results = [] }) => {
  const displayResults = results
    .filter((result) => result.category === "ticker")
    .sort((a, b) => {
      if (a.value < b.value) {
        return -1;
      }
      if (a.value > b.value) {
        return 1;
      }
      return 0;
    });

  if (displayResults.length > 9) {
    displayResults.length = 9;
  }

  const handleResultClick = (e, { uid, label }, idx) => {
    if (e.target.className.indexOf("uidWrapper") > -1) {
      alert(uid);
      return;
    }

    alert(`${idx + 1}. ${label}`);
  };

  return (
    <div className={styles.resultsWrapper}>
      {displayResults.map((result, idx) => {
        const { uid, label, value, category } = result;

        return (
          <div
            className={styles.resultItem}
            key={uid}
            onClick={(e) => handleResultClick(e, result, idx)}
          >
            <div>
              <span className={styles.label}>Label:</span> {label}
            </div>
            <div>
              <span className={styles.label}>Value:</span> {value}
            </div>
            <div>
              <span className={styles.label}>Category:</span> {category}
            </div>
            <div className={styles.uidWrapper}>
              <span className={styles.label}>UID:</span> {uid}
            </div>
          </div>
        );
      })}
    </div>
  );
};
