import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import move from "lodash-move";

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

const CardStack = ({ images, title }) => {
  const [cards, setCards] = React.useState(images || []);
  const wheelTimeoutRef = useRef(null);  // Reference for the debounce timeout

  const divRef = useRef(null);

  // Disable scrolling
  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  // Enable scrolling
  const enableScroll = () => {
    document.body.style.overflow = 'unset';
  };


  const moveToEnd = from => {
    setCards(move(cards, from, cards.length - 1));
  };

  // Handle wheel event with debounce
  const handleWheel = (event) => {
    if (event.deltaY > 0) {  // Scrolling down
      // Clear the existing timeout
      clearTimeout(wheelTimeoutRef.current);

      // Set a new timeout
      wheelTimeoutRef.current = setTimeout(() => {
        moveToEnd(0);  // Moves the first card to the end
      }, 100);  // Debounce interval in milliseconds
    }
  };

  // Responsive styles for the card wrap and cards
  const responsiveStyles = {
    cardWrapStyle: {
      position: "relative",
      width: "90vw",  // responsive width, max 350px
      height: "calc(90vw * 0.6286)",  // maintain aspect ratio, max 220px
      maxWidth: "500px",
      maxHeight: "298px",
    },
    cardStyle: {
      position: "absolute",
      width: "100%",  // Use 100% of parent's width
      height: "100%",  // Use 100% of parent's height
      borderRadius: "18px",
      transformOrigin: "top center",
      listStyle: "none"
    }
  };

  useEffect(() => {
    const div = divRef.current;

    // Add event listeners
    div.addEventListener('mouseenter', disableScroll);
    div.addEventListener('mouseleave', enableScroll);

    // Cleanup function
    return () => {
      div.removeEventListener('mouseenter', disableScroll);
      div.removeEventListener('mouseleave', enableScroll);
    };
  }, []);


  return (


    <div className="flex flex-col gap-14" style={wrapperStyle}>
      {title && <h2 className="text-brandGreen italic uppercase font-bold text-3xl md:text-4xl">{title}</h2>}
      <ul ref={divRef} style={responsiveStyles.cardWrapStyle} onWheel={handleWheel}>
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
