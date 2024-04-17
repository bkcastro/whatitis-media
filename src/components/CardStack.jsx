import React, { useState } from 'react';
import './CardStack.css'

const CardStack = ({ cards, title }) => {
    const [stack, setStack] = useState(cards);

    const handleClick = () => {
        const newStack = [stack[stack.length - 1], ...stack.slice(0, stack.length - 1)];
        setStack(newStack);
    };

    return (
        <div className="cursor-pointer border w-full" onClick={handleClick}>
            <h3 className="text-center text-lg font-bold mb-4">{title}</h3>
            {/* {stack.map((card, index) => (
                <div key={index} className={`absolute bg-white border border-black rounded-lg p-4 text-center shadow-md
                                            transform transition-all duration-300 ease-in-out
                                            ${index * 20} translate-y-${index * 20}`}>
                    {card}
                </div>
            ))} */}

            <div class="container border-2 ">
                <div class="card">
                    <h3 class="title">Card 1</h3>
                    <div class="bar">
                        <div class="emptybar"></div>
                        <div class="filledbar"></div>
                    </div>
                </div>
                <div class="card">
                    <h3 class="title">Card 2</h3>
                    <div class="bar">
                        <div class="emptybar"></div>
                        <div class="filledbar"></div>
                    </div>
                </div>
                <div class="card">
                    <h3 class="title">Card 3</h3>
                    <div class="bar">
                        <div class="emptybar"></div>
                        <div class="filledbar"></div>
                    </div>
                </div>
                <div class="card">
                    <h3 class="title">Card 4</h3>
                    <div class="bar">
                        <div class="emptybar"></div>
                        <div class="filledbar"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardStack;
