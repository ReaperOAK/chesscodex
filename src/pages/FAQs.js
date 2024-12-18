import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import RefundPolicy from "../components/RefundPolicy";

const faqs = [
  {
    category: "General",
    items: [
      {
        question: "What is the age requirement to join ChessCodex Academy?",
        answer: "We welcome students of all ages, starting from 4 years old. Younger children may require additional attention. Our courses cater to all skill levels, from beginners to advanced players.",
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
        answer: "Our classes are primarily held online for flexibility. However, under Kolkata Chess Academy, we also provide in-person sessions at our facility in Kolkata.",
      },
      {
        question: "What is the fee structure?",
        answer: "Our fees vary depending on the course level and duration. Check the 'Courses' section on our website or contact us for detailed pricing.",
      },
    ],
  },
  {
    category: "Policies & Refunds",
    items: [
      {
        question: "Do you offer a trial class?",
        answer: "We don't provide a free trial class. However, we offer a provisional admission with a rigorous entry test, followed by a 7-day, no-questions-asked money-back guarantee.",
      },
      {
        question: "Is there a refund policy?",
        answer: "Yes, we offer a full refund if you cancel within the first 7 days of payment. Your satisfaction is our priority.",
      },
    ],
  },
];

const FAQItem = ({ question, answer, isOpen, toggle }) => (
  <div className="border-b border-gray-200 py-4">
    <div
      className="flex justify-between items-center cursor-pointer"
      onClick={toggle}
    >
      <h3 className="text-lg font-medium text-gray-800">{question}</h3>
      {isOpen ? (
        <FaChevronUp className="text-gray-500" />
      ) : (
        <FaChevronDown className="text-gray-500" />
      )}
    </div>
    {isOpen && (
      <p className="mt-4 text-gray-600 transition-opacity duration-300 ease-in-out">
        {answer}
      </p>
    )}
  </div>
);

const FAQs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState({});
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleFAQ = (category, index) => {
    setOpenIndex((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  const filteredFAQs = faqs.map((section) => ({
    ...section,
    items: section.items.filter((faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const newOpenIndex = {};
    const newActiveCategories = [];

    filteredFAQs.forEach((section) => {
      section.items.forEach((faq, index) => {
        if (faq.question.toLowerCase().includes(value.toLowerCase())) {
          if (!newOpenIndex[section.category]) {
            newOpenIndex[section.category] = [];
            newActiveCategories.push(section.category);
          }
          newOpenIndex[section.category].push(index);
        }
      });
    });

    setOpenIndex(newOpenIndex);
    setActiveCategory(newActiveCategories.length > 0 ? newActiveCategories[0] : null);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            className="w-full p-3 rounded-lg border border-gray-300"
            placeholder="Search for a question..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {/* FAQ Categories */}
        {filteredFAQs.map((section, i) => (
          <div key={i} className="mb-8">
            <div
              className="flex justify-between items-center mb-4 cursor-pointer bg-gray-200 p-4 rounded-lg"
              onClick={() =>
                setActiveCategory(
                  activeCategory === section.category ? null : section.category
                )
              }
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {section.category}
              </h3>
              {activeCategory === section.category ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </div>
            {activeCategory === section.category && (
              <div className="space-y-4">
                {section.items.length > 0 ? (
                  section.items.map((faq, index) => (
                    <FAQItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openIndex[section.category]?.includes(index)}
                      toggle={() => toggleFAQ(section.category, index)}
                    />
                  ))
                ) : (
                  <p className="text-gray-600">No FAQs match your search.</p>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Refund Policy */}
        <RefundPolicy />
      </div>
    </section>
  );
};

export default FAQs;