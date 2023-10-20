import React from "react";
import { Bars } from "react-loader-spinner";

const BarsLoader = () => {
  return (
    <div className="loader">
      <Bars color="#7D869C" height={100} width={100} />
    </div>
  );
};

export default BarsLoader;
