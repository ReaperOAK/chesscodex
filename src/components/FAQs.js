import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import { faqs } from '../data';

const FAQItem = ({ question, answer, isOpen, toggle, isAspireChess }) => {
    const itemClasses = isAspireChess ? "bg-black bg-opacity-20 backdrop-blur-sm border border-gray-700/50 rounded-lg" : "border-b border-codex-gray-light py-4";
    const questionClasses = isAspireChess ? "text-lg font-medium text-white" : "text-lg font-medium text-brand-primary";
    const answerClasses = isAspireChess ? "pt-4 text-gray-300" : "mt-4 text-brand-text";

    return (
        <div className={itemClasses}>
            <div className="flex justify-between items-center cursor-pointer p-4" onClick={toggle}>
                <h3 className={questionClasses}>{question}</h3>
                {isOpen ? <FaChevronUp className={isAspireChess ? "text-amber-400" : "text-brand-secondary"} /> : <FaChevronDown className={isAspireChess ? "text-amber-400" : "text-brand-secondary"} />}
            </div>
            {isOpen && (
                <div className={`px-4 pb-4 ${isAspireChess ? 'border-t border-gray-700/50' : ''}`}>
                    <p className={answerClasses}>{answer}</p>
                </div>
            )}
        </div>
    );
};

const FAQs = () => {
    const location = useLocation();
    const isAspireChess = location.pathname.startsWith('/aspirechess');
    const siteFAQs = faqs.aspirechess;

    const [activeCategory, setActiveCategory] = useState("General");
    const [openIndices, setOpenIndices] = useState({});

    const toggleFAQ = (category, index) => {
        setOpenIndices(prev => ({ ...prev, [category]: prev[category] === index ? null : index }));
    };

    // --- Theme-Aware Class Definitions ---
    const sectionClasses = isAspireChess ? "" : "py-12 bg-codex-bg-light";
    const titleClasses = isAspireChess ? "text-4xl font-bold text-center text-amber-400 mb-12" : "text-4xl font-bold text-center text-brand-primary mb-12";
    const categoryButtonActive = isAspireChess ? "bg-amber-500 text-gray-900" : "bg-brand-primary text-white";
    const categoryButtonIdle = isAspireChess ? "bg-gray-700/50 text-white hover:bg-gray-600/50" : "bg-white text-brand-text hover:bg-brand-secondary";

    return (
        <section className={sectionClasses}>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className={titleClasses}>Frequently Asked Questions</h2>
                {/* Category Menu */}
                <div className="mb-8">
                    <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
                        {siteFAQs.map((section) => (
                            <li key={section.category}>
                                <button
                                    className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${activeCategory === section.category ? categoryButtonActive : categoryButtonIdle}`}
                                    onClick={() => setActiveCategory(section.category)}
                                >
                                    {section.category}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* FAQ List */}
                <div className="space-y-4">
                    {siteFAQs.find(s => s.category === activeCategory)?.items.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndices[activeCategory] === index}
                            toggle={() => toggleFAQ(activeCategory, index)}
                            isAspireChess={isAspireChess}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;