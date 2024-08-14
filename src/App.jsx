import React from "react";
import Navbar from "./Components/Navbar";
import First from "./Components/First";

function App() {
  return (
    <div className="bg-[url(https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-US.png)] h-screen w-full bg-cover bg-no-repeat bg-center">
      <Navbar/>
      <First/>
    </div>
  );
}

export default App;
