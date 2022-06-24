import React from "react";
import styles from "./style.module.css";

const Accordion = ({ summary, details, expanded, handleToggle }) => {
  return (
    <div className={styles.accordion_item}>
      <div className={styles.accordion_summary} onClick={() => handleToggle()}>
        <span className={styles.accordion_summary_text}>{summary}</span>
        <span className={styles.accordion_icon}>{expanded ? "-" : "+"}</span>
      </div>

      {expanded && <div className={styles.accordion_details}>{details}</div>}
    </div>
  );
};

export default Accordion;
