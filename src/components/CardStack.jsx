import React from "react";
import { motion } from "framer-motion";
import move from "lodash-move";

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

const CardStack = ({ images, title }) => {
  const [cards, setCards] = React.useState(images || []);

  const moveToEnd = from => {
    setCards(move(cards, from, cards.length - 1));
  };

  // Responsive styles for the card wrap and cards
  const responsiveStyles = {
    cardWrapStyle: {
      position: "relative",
      width: "90vw",  // responsive width, max 350px
      height: "calc(90vw * 0.6286)",  // maintain aspect ratio, max 220px
      maxWidth: "450px",
      maxHeight: "300px",
    },
    cardStyle: {
      position: "absolute",
      width: "100%",  // Use 100% of parent's width
      height: "100%",  // Use 100% of parent's height
      borderRadius: "8px",
      transformOrigin: "top center",
      listStyle: "none"
    }
  };

  return (
    <div className="flex flex-col gap-14" style={wrapperStyle}>
      {title && <h2 className="text-brandGreen italic uppercase font-bold text-3xl md:text-4xl">{title}</h2>}
      <ul style={responsiveStyles.cardWrapStyle}>
        {cards.map((imgSrc, index) => {
          const canDrag = index === 0;

          return (
            <motion.li
              key={imgSrc}
              style={{
                ...responsiveStyles.cardStyle,
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                cursor: canDrag ? "grab" : "auto"
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: cards.length - index
              }}
              drag={canDrag ? "y" : false}
              dragConstraints={{
                top: 0,
                bottom: 0
              }}
              onDragEnd={() => moveToEnd(index)}
            />
          );
        })}
      </ul>
    </div>
  );
};

const wrapperStyle = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "auto"
};

export default CardStack;
