import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { Card } from "../Card";
import { iCards } from "../../contexts/DeckContext";
import { useEffect, useState } from "react";

interface iCarrouselProps {
  cardsList: iCards[];
  currentIndex: number;
}

export const Carroussel = ({ currentIndex, cardsList }: iCarrouselProps) => {
  const [goToSlide, setGoToSlide] = useState(0);

  const cards = cardsList.map((card, index) => {
    return {
      key: card.id,
      content: <Card cardItem={card} key={card.id} index={index} />,
    };
  });

  useEffect(() => {
    setGoToSlide(currentIndex);
  }, [currentIndex]);

  return (
    <Carousel
      slides={cards}
      goToSlide={goToSlide}
      offsetRadius={1}
      showNavigation={false}
      animationConfig={config.gentle}
    />
  );
};
