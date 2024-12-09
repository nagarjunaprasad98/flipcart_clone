import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Import your CSS file
import banner1 from "../../Images/Banner11.jpg";
import banner2 from "../../Images/Banner12.jpg";
import banner3 from "../../Images/Banner13.png";
import banner4 from "../../Images/Banner14.jpeg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const banners = [
  {
    id: 1,
    imgsrc: banner1,
    alt: "Offer 1",
  },
  {
    id: 2,
    imgsrc: banner2,
    alt: "Offer 2",
  },
  {
    id: 3,
    imgsrc: banner3,
    alt: "Offer 3",
  },
  {
    id: 4,
    imgsrc: banner4,
    alt: "Offer 4",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? banners.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === banners.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Automatically go to the next slide
    }, 2000); // Change slide every 2 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carousel">
      <ArrowBackIosIcon className="icon1 icon1-left" onClick={handlePrev} />
      <span>
        <img
          className="slide"
          key={banners[currentIndex].id}
          src={banners[currentIndex].imgsrc}
          alt={banners[currentIndex].alt}
        />
      </span>
      <ArrowForwardIosIcon className="icon1 icon1-right" onClick={handleNext} />
    </div>
  );
};

export default Carousel;
