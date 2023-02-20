import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./styles/App.scss";
import Card from "./Card";
import "./fonts/Outfit-Regular.ttf";
import image from "./assets/image-qr-code.png";

function App() {
  const header = "Improve your front-end skills by building projects";
  const text =
    "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level";

  return (
    <div className="container-wrapper flex justify-center">
      <Card text={text} header={header} image={image} />
    </div>
  );
}

export default App;
