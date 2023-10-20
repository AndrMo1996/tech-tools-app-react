import React from "react";
import styles from "./EstimateView.module.scss";

const CustomFields = ({ fields }) => {
  return (
    <div>
      {fields.map((field) => {
        return <div key={field.key} className={styles.custom__fields}>{`${field.title} \n`}</div>;
      })}
    </div>
  );
};

export default CustomFields;
