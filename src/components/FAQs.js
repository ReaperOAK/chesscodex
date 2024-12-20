import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    category: "General",
    items: [
      {
        question: "What is the age requirement to join ChessCodex Academy?",
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
        answer: "Our classes are primarily held online for flexibility. However, under Kolkata Chess Academy, we also provide in-person sessions at our facility in Kolkata.",
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
        answer: "We host regular local and rated tournaments around Kolkata for practical experience. Additionally, we offer online tournaments every two weeks through Kolkata Chess Academy to keep students engaged and improving.",
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
        question: "How can I partner or collaborate with ChessCodex Academy?",
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
];

const FAQItem = ({ question, answer, isOpen, toggle }) => (
  <div className="border-b border-[#c2c1d3] py-4">
    <div
      className="flex justify-between items-center cursor-pointer"
      onClick={toggle}
    >
      <h3 className="text-lg font-medium text-[#200e4a]">{question}</h3>
      {isOpen ? (
        <FaChevronUp className="text-[#461fa3]" />
      ) : (
        <FaChevronDown className="text-[#461fa3]" />
      )}
    </div>
    {isOpen && (
      <p className="mt-4 text-[#270185] transition-opacity duration-300 ease-in-out">
        {answer}
      </p>
    )}
  </div>
);

const FAQs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState({ General: 0 });
  const [activeCategory, setActiveCategory] = useState("General");

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
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#refund-policy") {
      const refundPolicyIndex = faqs.findIndex(section =>
        section.items.some(faq => faq.question.toLowerCase().includes("refund policy"))
      );
      if (refundPolicyIndex !== -1) {
        setActiveCategory("Policies & Refunds");
        setOpenIndex({ "Policies & Refunds": refundPolicyIndex });
        document.getElementById("refund-policy").scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const isSearching = searchTerm.trim().length > 0;

  return (
    <section className="bg-[#f3f1f9] py-12">
      <Helmet>
        <title>FAQs - ChessCodex</title>
        <meta name="description" content="Find answers to frequently asked questions about ChessCodex. Learn about our courses, policies, and more." />
        <meta name="keywords" content="ChessCodex, FAQs, chess courses, chess policies, chess training, chess coaching" />
      </Helmet>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#200e4a] mb-12">
          Frequently Asked Questions
        </h2>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            className="w-full p-3 rounded-lg border border-[#c2c1d3] text-[#270185]"
            placeholder="Search for a question..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {/* FAQ Categories Menu */}
        {!isSearching && (
          <div className="mb-8">
            <ul className="flex justify-center space-x-4">
              {faqs.map((section, index) => (
                <li key={index}>
                  <button
                    className={`px-4 py-2 rounded-lg ${activeCategory === section.category ? 'bg-[#461fa3] text-white' : 'bg-white text-[#200e4a]'} hover:bg-[#7646eb] transition`}
                    onClick={() => setActiveCategory(section.category)}
                  >
                    {section.category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* FAQ List */}
        {isSearching ? (
          <div className="space-y-4">
            {filteredFAQs.flatMap(section => section.items).length > 0 ? (
              filteredFAQs.flatMap(section => section.items).map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex[faq.question]}
                  toggle={() => toggleFAQ(faq.question, index)}
                />
              ))
            ) : (
              <p className="text-[#270185]">No FAQs match your search.</p>
            )}
          </div>
        ) : (
          filteredFAQs.map((section, i) => (
            <div key={i} className="mb-8">
              {activeCategory === section.category && (
                <div className="space-y-4">
                  {section.items.length > 0 ? (
                    section.items.map((faq, index) => (
                      <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex[section.category] === index}
                        toggle={() => toggleFAQ(section.category, index)}
                      />
                    ))
                  ) : (
                    <p className="text-[#270185]">No FAQs match your search.</p>
                  )}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default FAQs;