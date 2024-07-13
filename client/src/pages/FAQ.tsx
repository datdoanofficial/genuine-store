import React, { useState } from "react";
import "../styles/pages/FAQ.scss";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

type Props = {};

const FAQ = (props: Props) => {
  const faqItems: FAQItem[] = [
    { id: 0, question: "Question 1", answer: "Answer 1" },
    { id: 1, question: "Question 2", answer: "Answer 2" },
    { id: 2, question: "Question 3", answer: "Answer 3" },
    { id: 3, question: "Question 4", answer: "Answer 4" },
    { id: 4, question: "Question 5", answer: "Answer 5" },
    { id: 5, question: "Question 6", answer: "Answer 6" },
    { id: 6, question: "Question 7", answer: "Answer 7" },
    { id: 7, question: "Question 8", answer: "Answer 8" },
    { id: 8, question: "Question 9", answer: "Answer 9" },
    { id: 9, question: "Question 10", answer: "Answer 10" },
    { id: 10, question: "Question 11", answer: "Answer 11" },
    { id: 11, question: "Question 12", answer: "Answer 12" },
    { id: 12, question: "Question 13", answer: "Answer 13" },
    { id: 13, question: "Question 14", answer: "Answer 14" },
    { id: 14, question: "Question 15", answer: "Answer 15" },
    { id: 15, question: "Question 16", answer: "Answer 16" },
    // Add more FAQ items here
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setActiveIndex((currentId) => (currentId === id ? null : id));
    setIsAnswerVisible(!isAnswerVisible);
  };

  const getMaxHeight = (id: number): string => {
    return activeIndex === id ? "200px" : "0px";
  };

  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  // Calculate the midpoint for splitting the array
  const midpoint = Math.ceil(faqItems.length / 2);

  // Splitting the faqItems into two halves
  const firstHalfItems = faqItems.slice(0, midpoint);
  const secondHalfItems = faqItems.slice(midpoint);

  const renderFAQList = (items: FAQItem[]) => (
    <div className="faq-list">
      {items.map((item: FAQItem) => (
        <div className="faq-item" key={item.id}>
          <div className="faq-item-content">
            <div className="faq-item-question">
              {item.question}{" "}
              <div className="icon" onClick={() => toggleFAQ(item.id)}>
                <span
                  className={
                    activeIndex === item.id ? "tabler--minus" : "tabler--plus"
                  }
                ></span>
              </div>
            </div>
            <div
              className={`faq-item-answer ${
                activeIndex === item.id ? "active" : ""
              }`}
              style={{
                maxHeight: getMaxHeight(item.id),
                overflow: "hidden",
                transition: "0.2s linear",
              }}
            >
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="faq-page">
      <div className="heading-title">Frequently Asked Questions</div>
      <div className="faq-wrapper">
        {/* FAQ List 1 */}
        {renderFAQList(firstHalfItems)}

        {/* FAQ List 2 */}
        {renderFAQList(secondHalfItems)}
      </div>
    </div>
  );
};

export default FAQ;
