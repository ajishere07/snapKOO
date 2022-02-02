import React, { FC } from "react";
import "./App.css";
import BottomNavigations from "./components/navigations/BottomNavigations";
import Home from "./pages/Home";
const App: FC = () => {
  return (
    <div className="App">
      <Home />
      <BottomNavigations />
    </div>
  );
};

export default App;
