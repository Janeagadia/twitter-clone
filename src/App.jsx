import React from "react";
import Home from "./Components/Home";
import Nav from "./Components/Nav";

const App = () => {
  return (
    <div className="flex gap-8 ">
      <Nav />
      <Home />
    </div>
  );
};

export default App;
