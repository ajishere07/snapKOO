import React from "react";
import "../styles/NoRouteExist.css";
type Props = {};

const NoRouteExist = (props: Props) => {
  return (
    <main className="errorContainer">
      <h1>
        404 Error<span>!</span>
      </h1>
    </main>
  );
};

export default NoRouteExist;
