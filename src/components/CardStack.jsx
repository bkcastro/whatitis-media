import React from "react";
import { motion } from "framer-motion";
import move from "lodash-move";

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

const CardStack = ({ images }) => {
  const [cards, setCards] = React.useState(images || []);

  const moveToEnd = from => {
    setCards(move(cards, from, cards.length - 1));
  };

  return (
    <div style={wrapperStyle}>
      <ul style={cardWrapStyle}>
        {cards.map((imgSrc, index) => {
          const canDrag = index === 0;

          return (
            <motion.li
              key={imgSrc}  // Ensure the key is unique and correct
              style={{
                ...cardStyle,
                backgroundImage: `url(${imgSrc})`,  // Set background image
                backgroundSize: 'cover',  // Cover the entire area of the card
                backgroundPosition: 'center',  // Center the background image
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

const cardWrapStyle = {
  position: "relative",
  width: "350px",
  height: "220px"
};

const cardStyle = {
  position: "absolute",
  width: "350px",
  height: "220px",
  borderRadius: "8px",
  transformOrigin: "top center",
  listStyle: "none"
};

export default CardStack;
