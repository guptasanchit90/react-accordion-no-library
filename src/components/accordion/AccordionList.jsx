import React, { useState } from "react";
import Accordion from "./Accordion";

const AccordionList = ({ items, options = { allowMultiple: true } }) => {
  const [expandedItems, setExpandedItems] = useState({});

  return (
    <>
      {items.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <Accordion
              summary={item.summary}
              details={item.details}
              expanded={expandedItems[item.id]}
              handleToggle={() => {
                if (expandedItems[item.id]) {
                  setExpandedItems({ ...expandedItems, [item.id]: false });
                } else {
                  if (options.allowMultiple) {
                    setExpandedItems({ ...expandedItems, [item.id]: true });
                  } else {
                    setExpandedItems({ [item.id]: true });
                  }
                }
              }}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default AccordionList;
