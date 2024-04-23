import React, { useState, useEffect } from 'react';
import './CardStack.css'

const CardStack = ({ cards, title, blanks = 0 }) => {
    const [stack, setStack] = useState(cards);

    useEffect(() => {
        const blankCards = Array(blanks).fill({ isBlank: true });
        setStack([...cards, ...blankCards]);
    }, [cards, blanks]);

    const handleClick = () => {
        const newStack = [stack[stack.length - 1], ...stack.slice(0, stack.length - 1)];
        setStack(newStack);
    };

    return (
        <div className="cursor-pointer w-full h-[350px]" onClick={handleClick}>
            <h1 className="text-brandGreen uppercase p-1 text-center font-bold italic">{title}</h1>
            <div className="container p-6">
                {stack.map((card, index) => (
                    <div
                        key={index}
                        className={card.isBlank ? "card blank" : "card"}
                        style={{
                            backgroundImage: card.isBlank ? undefined : `url(${card})`,
                            zIndex: stack.length - index  // This will set the highest z-index for the first item
                        }}
                    />
                ))}
            </div>
        </div>

    );
};

export default CardStack;
