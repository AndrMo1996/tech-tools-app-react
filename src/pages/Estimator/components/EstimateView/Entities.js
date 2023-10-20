import React from "react";
import CustomFields from "./CustomFields";
import styles from "./EstimateView.module.scss";

const Entities = ({ entities }) => {
  return (
    <div>
      {entities.map((entity) => {
        if (entity.customFields.count > 0) {
          return (
            <div key={entity.id} className={styles.entity__info}>
              {`${entity.title} - ${entity.total} \n`}
              <span
                className={styles.custom__field__title}
              >{`Custom fields - ${entity.customFields.count} \n`}</span>
              <CustomFields fields={entity.customFields.fields} />
            </div>
          );
        }

        return (
          <div
            key={entity.id}
            className={styles.entity__info}
          >{`${entity.title} - ${entity.total} \n`}</div>
        );
      })}
    </div>
  );
};

export default Entities;
