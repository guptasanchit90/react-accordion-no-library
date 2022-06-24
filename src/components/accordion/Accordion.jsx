import React, { useState } from "react";
import styles from "./style.module.css";

const Accordion = ({ sumary, details }) => {
  const [isExpanded, setIsExpanded] = useState();

  return (
    <div className={styles.accordion_item}>
      <div
        className={styles.accordion_summary}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {sumary}
        <span className={styles.accordion_icon}>{isExpanded ? "-" : "+"}</span>
      </div>

      {isExpanded && <div className={styles.accordion_details}>{details}</div>}
    </div>
  );
};

export default Accordion;
