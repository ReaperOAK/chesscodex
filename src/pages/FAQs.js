import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: "What is the age requirement to join ChessCodex Academy?",
    answer: "We welcome students of all ages, starting from 4 years old. While we believe there should be no age barrier to learning, younger children may require additional attention. Our courses cater to all skill levels, from beginners to advanced players.",
  },
  {
    question: "Do I need any prior chess experience to enrol?",
    answer: "No prior experience is necessary. We offer courses for all levels, including complete beginners who are just starting to learn the game.",
  },
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
    question: "Is there a refund policy?",
    answer: "Yes, we offer a full refund, no question asked, if you cancel within the first 7 days of payment. We aim for your satisfaction, so if you’re not fully happy with our services within this period, we’ll provide a hassle-free refund.",
  },
  {
    question: "How can I stay updated on tournaments organized by the academy?",
    answer: "You can find all upcoming and past tournaments in the ‘Events’ section on our website. This section is regularly updated with in-person and online events.",
  },
  {
    question: "What types of tournaments do you organize?",
    answer: "We host regular local and rated tournaments around Kolkata for practical experience. Additionally, we offer online tournaments every two weeks through Kolkata Chess Academy to keep students engaged and improving.",
  },
  {
    question: "What is your scholarship program?",
    answer: "We award monthly scholarships across different levels (Beginner, Intermediate, Advanced, Expert). Selection is based on coach recommendations, tournament performance, and active participation.",
  },
  {
    question: "What are the benefits of subscribing to your newsletter?",
    answer: "Our newsletter provides insightful articles on various chess topics, including strategy, psychology, and training techniques. Subscribers receive exclusive updates on academy events, glimpses into our Pro Members Club, and a first look at new content.",
  },
  {
    question: "How do I become a referral partner?",
    answer: "For those interested in becoming a referral partner, please visit our 'Collaborate with Us' section for further details.",
  },
  {
    question: "How can I partner or collaborate with ChessCodex Academy?",
    answer: "We welcome collaborations and partnerships. Visit our 'Collaborate with Us' section to learn more.",
  },
  {
    question: "Do you offer customized training?",
    answer: "Yes, we provide personalized coaching tailored to each student's strengths, weaknesses, and goals. You can find more by contacting us.",
  },
  {
    question: "How can I sign up for the academy’s trial program or provisional admission?",
    answer: "Interested candidates must complete an entry test without the Beginner level for whom taking the entry test is optional. Based on the results, students may join on a provisional basis, with a 7-day, no-questions-asked money-back guarantee.",
  },
];

function FAQItem({ question, answer, isOpen, toggle }) {
  return (
    <div className="border-b border-gray-200 py-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggle}>
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
}

const FAQs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
        
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            className="w-full p-3 rounded-lg border border-gray-300"
            placeholder="Search for a question..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))
          ) : (
            <p className="text-gray-600">No FAQs match your search.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQs;