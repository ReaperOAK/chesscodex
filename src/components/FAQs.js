import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

const faqs = {
  aspirechess: [
    {
      category: "General",
      items: [
        {
          question: "What is the age requirement to join AspireChess Academy?",
          answer: "We welcome students of all ages, starting from 4 years old. While we believe there should be no age barrier to learning, younger children may require additional attention. Our courses cater to all skill levels, from beginners to advanced players.",
        },
        {
          question: "Do I need any prior chess experience to enrol?",
          answer: "No prior experience is necessary. We offer courses for all levels, including complete beginners who are just starting to learn the game.",
        },
      ],
    },
    {
      category: "Courses & Classes",
      items: [
        {
          question: "How are classes conducted?",
          answer: "Our classes are primarily held online for flexibility. However, we also provide in-person sessions at our facility.",
        },
        {
          question: "What is the fee structure?",
          answer: "Our fees vary depending on the course level and duration. You can check the 'Courses' section on our website or contact us directly for a detailed breakdown of pricing.",
        },
        {
          question: "Do you offer a trial class?",
          answer: "We don't provide a free trial class. However, we offer a provisional admission with a rigorous entry test, followed by a 7-day, no-questions-asked money-back guarantee. Students are evaluated within the first month, with placement at the appropriate level based on coach assessment & the batch assignment is at coaches discretion.",
        },
        {
          question: "Do you offer customized training?",
          answer: "Yes, we provide personalized coaching tailored to each student's strengths, weaknesses, and goals. You can find more by contacting us.",
        },
        {
          question: "How can I sign up for the academy’s trial program or provisional admission?",
          answer: "Interested candidates must complete an entry test except the Beginner level for whom taking the entry test is optional. Based on the results, students may join on a provisional basis, with a 7-day, no-questions-asked money-back guarantee.",
        },
      ],
    },
    {
      category: "Tournaments",
      items: [
        {
          question: "How can I stay updated on tournaments organized by the academy?",
          answer: "You can find all upcoming and past tournaments in the ‘Events’ section on our website. This section is regularly updated with in-person and online events.",
        },
        {
          question: "What types of tournaments do you organize?",
          answer: "We host regular local and rated tournaments for practical experience. Additionally, we offer online tournaments every two weeks to keep students engaged and improving.",
        },
      ],
    },
    {
      category: "Policies & Refunds",
      items: [
        {
          question: "Is there a refund policy?",
          answer: "Yes, we offer a full refund, no question asked, if you cancel within the first 7 days of payment. We aim for your satisfaction, so if you’re not fully happy with our services within this period, we’ll provide a hassle-free refund.",
        },
      ],
    },
    {
      category: "Partnerships & Collaborations",
      items: [
        {
          question: "How do I become a referral partner?",
          answer: "For those interested in becoming a referral partner, please visit our 'Collaborate with Us' section for further details.",
        },
        {
          question: "How can I partner or collaborate with AspireChess Academy?",
          answer: "We welcome collaborations and partnerships. Visit our 'Collaborate with Us' section to learn more.",
        },
      ],
    },
    {
      category: "Scholarships & Newsletter",
      items: [
        {
          question: "What is your scholarship program?",
          answer: "We award monthly scholarships across different levels (Beginner, Intermediate, Advanced, Expert). Selection is based on coach recommendations, tournament performance, and active participation.",
        },
        {
          question: "What are the benefits of subscribing to your newsletter?",
          answer: "Our newsletter provides insightful articles on various chess topics, including strategy, psychology, and training techniques. Subscribers receive exclusive updates on academy events, glimpses into our Pro Members Club, and a first look at new content.",
        },
      ],
    },
  ],
};

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