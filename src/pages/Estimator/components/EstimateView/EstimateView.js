import React, { useRef } from "react";
import { useSelector } from "react-redux";

import { useScrollbar } from "../../../../hooks";
import Entities from "./Entities";
import styles from "./EstimateView.module.scss";

const EstimateView = () => {
  const { estimate, entityTypes } = useSelector((state) => state.estimate);

  const estimateWrapper = useRef(null);
  const hasScroll = true;

  useScrollbar(estimateWrapper, hasScroll);

  return (
    <div className={styles.estimate__view} ref={estimateWrapper}>
      <div>
        {entityTypes.map((entityType) => {
          const entities = estimate.filter((entity) => {
            return entity.entityType === entityType.title;
          });
          return (
            <div key={entityType.id} className={styles.entity__type}>
              {`${entityType.title} entities \n`}
              <Entities entities={entities} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EstimateView;
