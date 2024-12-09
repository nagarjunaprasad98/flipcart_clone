import React from "react";
import CustomCard from "../Card/CustomCard";
import { Typography } from "@mui/material";
import watch1 from "../../Images/Watch1.jpg";
import MirroCamera from "../../Images/MirroCamera.jpeg";
import AirBuds from "../../Images/AirBuds.jpeg";
import Trimmer1 from "../../Images/Trimmer1.jpeg";
import Monitors1 from "../../Images/Monitors1.jpeg";
import Printers1 from "../../Images/Printers1.jpeg";

const data = [
  {
    id: 1,
    imgsrc: watch1,
    description: "Smart Watches",
    alt: "watch1",
    prizes: "999.00",
  },
  {
    id: 2,
    imgsrc: MirroCamera,
    description: "Mirrorless Cameras",
    alt: "watch1",
    prizes: "999.00",
  },
  {
    id: 3,
    imgsrc: AirBuds,
    description: "Wireless Headphones",
    alt: "Headphones",
    prizes: "999.00",
  },
  {
    id: 4,
    imgsrc: Trimmer1,
    description: "Best of Shavers",
    alt: "Trimmers",
    prizes: "999.00",
  },
  {
    id: 5,
    imgsrc: Monitors1,
    description: "Monitors",
    alt: "Monitors",
    prizes: "9,999.00",
  },
  {
    id: 6,
    imgsrc: Printers1,
    description: "Top Printers",
    alt: "Printers",
    prizes: "1,999.00",
  },
];

const HomeElectronics = () => {
  return (
    <div className="containerBody">
      <Typography gutterBottom variant="h6" component="div">
        Electronics
      </Typography>
      <div className="d-flex gap-3">
        <CustomCard data={data} />
      </div>
    </div>
  );
};

export default HomeElectronics;
