import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Prentix?",
    answer: "Prentix offers fully AI-mentored virtual internships with top brands. You get to solve real-world problems while being guided by expert AI mentors, earning a verified credential upon completion.",
  },
  {
    question: "Whom is this internship for?",
    answer: "Prentix internships are open to students from Engineering, Arts, Commerce, or any other field. As long as you're committed to exploring your track deeply, your background will never be a barrier.",
  },
  {
    question: "In which tracks can I intern?",
    answer: "You can choose from a wide range of high-demand fields: Software engineering, UI/UX design, product management, prompt engineering, data science, data engineering, management consulting, brand marketing, digital marketing & even academic research.",
  },
  {
    question: "I have no prior experience. Can I still enroll?",
    answer: "Prentix internships are designed to be beginner-friendly. Even if you’re an absolute beginner, we can get you from “clueless” to “able to land any role” on one condition — You have to be extremely serious about your career!",
  },
  {
    question: "How long is the internship?",
    answer: "All Prentix internships are self-paced. Most students complete it in 4-8 weeks, but fast learners often finish earlier. Your AI mentor is available 24/7 to help you progress. You decide your pace — we only expect consistency.",
  },
  {
    question: "Will I get a certificate?",
    answer: "Absolutely. Every student who completes an internship receives an industry-recognised certificate from the brand they worked with — a credential you can add to your résumé and LinkedIn, and one that recruiters notice instantly.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 md:py-32 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subheading mb-4">Got Questions?</p>
          <h2 className="section-heading text-foreground">FAQs:</h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              id={`faq-${index}`}
              className="bg-card border border-border/50 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
