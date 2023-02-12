import React, { useEffect, useState } from "react";
import { images } from "../../../constants";
import "./Carousel.scss";

const Carousel = () => {
  const bibleVerse = [
    {
      text: "Die Liebe ist langmütig und freundlich, die Liebe eifert nicht, die Liebe treibt nicht Mutwillen, sie bläht sich nicht auf, sie verhält sich nicht ungehörig, sie sucht nicht das Ihre, sie lässt sich nichterbittern sie rechnet das Böse nicht zu",
      verse: "1 Korinther 13:4-5",
    },
    {
      text: "Seid allezeit fröhlich, betet ohne Unterlass, seid dankbar in allen Dingen; denn das ist der Wille Gottes in Christus Jesus für euch.",
      verse: "Thessalonicher 5:16-18",
    },
    {
      text: "Sorgt euch um nichts, sondern in allen Dingen lasst eure Bitten in Gebet und Flehen mit Danksagung vor Gott kundwerden! Und der Friede Gottes, der höher ist als alle Vernunft, wird eure Herzen und Sinne in Christus Jesus bewahren.",
      verse: "Philipper 4:6-7",
    },
    {
      text: "Sie sind allesamt Sünder und ermangeln des Ruhmes, den sie vor Gott haben sollen, und werden ohne Verdienst gerecht aus seiner Gnade durch die Erlösung, die durch Christus Jesus geschehen ist.",
      verse: "Römer 3:23-24",
    },
  ];
  const data = ["1", "2", "3", "4"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 8000);
    return () => clearInterval(interval);
  });
  return (
    <>
      <div className="carousel-container">
        {bibleVerse.map((item, index) => {
          return (
            <>
              <div
                className="carousel-item"
                style={{ transform: `translate(-${currentIndex * 100}%)` }}
                key={index}
              >
                <p>{item.text}</p>
                <h4>{item.verse}</h4>
                <img src={images.bible} alt="bible-logo" />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Carousel;
