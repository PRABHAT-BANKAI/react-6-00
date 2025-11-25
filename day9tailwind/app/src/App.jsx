import React from "react";
import Footer from "./components/Footer";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <h1 className="text-blue-600 text-[35px] bg-amber-600">Hello world </h1>

      {/* <div className="flex justify-between">
        <div className="h-28 w-28 border"></div>
        <div className="h-28 w-28 border"></div>
        <div className="h-28 w-28 border"></div>
        <div className="h-28 w-28 border"></div>
        <div className="h-28 w-28 border"></div>
      </div> */}

      <Card />

      <Footer />
    </>
  );
};

export default App;
