import React, { FC } from "react";
import Banner from "./assets/images/BrandBanner.png";
const App: FC = () => {
  return (
    <div className="App">
      <img
        src={Banner}
        alt="banner"
        style={{ width: "540px", height: "388" }}
      />
    </div>
  );
};

export default App;
