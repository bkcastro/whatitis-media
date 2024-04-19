import React, { useState } from 'react';
import './CardStack.css'

const CardStack = ({ cards, title }) => {
    const [stack, setStack] = useState(cards);

    const handleClick = () => {
        const newStack = [stack[stack.length - 1], ...stack.slice(0, stack.length - 1)];
        setStack(newStack);
    };

    return (
        <div className="cursor-pointer w-full" onClick={handleClick}>
            <h1 className=" text-brandGreen uppercase p-1 text-center font-bold italic">{title}</h1>
            <div class="container p-6">
                {stack.map((card, index) => (
                    <div
                        key={index}
                        className="card"
                        style={{ backgroundImage: `url(${card})` }}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardStack;
