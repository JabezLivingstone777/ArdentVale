import React, { useState } from "react";
import businessAnalysisImg from "../assets/Business Analysis.png";
import strategicImg from "../assets/Strategic Planning.png";
import agileImg from "../assets/Agile Development.png";
import commitmentImg from "../assets/Commitment to Timelines.png";

const initialCards = [
    {
        img: businessAnalysisImg,
        title: "Business Analysis",
        desc:
            "We begin with deep-dive discovery sessions, stakeholder interviews, and market research to define goals, identify challenges, and align the product vision with your business needs.",
    },
    {
        img: strategicImg,
        title: "Strategic Planning",
        desc:
            "Our planning process includes scope definition, timeline estimation, resource allocation, and roadmap creation—setting the foundation for an efficient, result-oriented engagement.",
    },
    {
        img: agileImg,
        title: "Agile Development",
        desc:
            "We use Agile methodologies to enable iterative delivery, continuous feedback, and flexible execution. This ensures reduced risk, improved product quality, and faster time to market.",
    },
    {
        img: commitmentImg,
        title: "Commitment to Timelines",
        desc:
            "Guided by ISO-compliant standards and best practices, our team delivers on every milestone with punctuality, transparency & dedication making us a trusted long-term partner.",
    },
];

const CardsLifecycleSection = () => {
    const [cards, setCards] = useState(initialCards);
    let dragIndex = null;

    const handleDragStart = (index) => {
        dragIndex = index;
    };

    const handleDrop = (index) => {
        const updated = [...cards];
        const draggedCard = updated[dragIndex];
        updated.splice(dragIndex, 1);
        updated.splice(index, 0, draggedCard);
        setCards(updated);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {cards.map((card, index) => (
                <div
                    key={index}
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => handleDrop(index)}
                    className="bg-white rounded-lg shadow-lg p-4 sm:p-6 text-center hover:shadow-xl transition-shadow cursor-move select-none"
                >
                    <div className="flex justify-center mb-4">
                        <img
                            src={card.img}
                            alt={card.title}
                            className="w-12 sm:w-16 h-12 sm:h-16 object-contain"
                        />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">{card.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{card.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default CardsLifecycleSection;