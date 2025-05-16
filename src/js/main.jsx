import React from "react";
import ReactDOM from "react-dom/client";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import "../styles/index.css";

// components
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import MyCards from "./components/MyCards";
import MyFooter from "./components/Footer";

const cardsData = [
  {
    imageUrl: "../../src/img/dirthill_bisti.png",
    altUrlText: "A large hill in the Bisti Badlands, NM",
    title: "Bisti Badlands",
    text: "This is one of my favorite photos I took in the Bisti Bad Lands, shot on a Nikon D3x with a 50mm lens.",
    btnText: "Read More",
  },
  {
    imageUrl: "../../src/img/loveLocks_santorini.png",
    altUrlText:
      "Locks attached to a wrought iron fence overlooking the Aegean Sea",
    title: "Locks of Love",
    text: "People flock to Santorini to see the beautiful views, and to lock in their love symbolically with love locks.",
    btnText: "See More",
  },
  {
    imageUrl: "../../src/img/moped_amsterdam.png",
    altUrlText:
      "Two people on a blue moped scoot through city streets in Amsterdam",
    title: "Moped Mobility",
    text: "In Amsterdam you will find mostly bicycles, but once in a while a speedy Moped zips through traffic.",
    btnText: "See More",
  },
  {
    imageUrl: "../../src/img/threewasps_killeen.png",
    altUrlText: "Three wasps protect their nest in the early morning hours",
    title: "Three Amigops",
    text: "These three wasps were left guarding the nest, it was cold and damp so they were not moving much.",
    btnText: "See More",
  },
];

const jumboTronData = {
  jumboTitle: "CC Dunes Photography",
  jumboText:
    `I am CC Dune, an imaginary and ficticious dude that likes to travel and take interesting photographs. Some are 
    good, others not so good but that doesn't stop me from doing my best to take at least one interesting shot per 
    trip. My current setup is a full frame Digital Single Lens Reflex Nikon D850 with a small collection of lenses 
    ranging from 50 mm, 14 mm, and one 85mm portrait lens. `,
  jumboBtn: "Read More",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <Jumbotron jumbo={jumboTronData} />
    <MyCards cards={cardsData} />
    <MyFooter />
  </React.StrictMode>
);
