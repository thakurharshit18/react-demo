import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("black");
  const handlecolor = (newcolor) => {
    setColor(newcolor);
  };

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <p className="flex items-stretch justify-center">
          THIS IS HARSHIT CHAUHAN REACT DEMO
        </p>
      </div>
      <div className="fixed inset-x-0 flex flex-wrap justify-center px-2 text-white bottom-12">
        <div className="flex flex-wrap justify-center gap-3 px-2 py-2 bg-white shadow-lg rounded-3xl">
          <button
            className="px-4 bg-red-600 outline-none"
            onClick={() => handlecolor("red")}
          >
            {" "}
            Red{" "}
          </button>
          <button
            className="px-4 bg-yellow-400 outline-none"
            onClick={() => handlecolor("yellow")}
          >
            {" "}
            yellow
          </button>
          <button
            className="px-4 bg-green-600 outline-none"
            onClick={() => handlecolor("green")}
          >
            {" "}
            green
          </button>
          <button
            className="px-4 bg-blue-600 outline-none"
            onClick={() => handlecolor("blue")}
          >
            {" "}
            blue
          </button>
          <button
            className="px-4 bg-black outline-none"
            onClick={() => handlecolor("white")}
          >
            {" "}
            white
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
