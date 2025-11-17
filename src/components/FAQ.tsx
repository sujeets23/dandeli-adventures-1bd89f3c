import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the best time to visit Dandeli?",
    answer: "The best time to visit Dandeli is from October to May when the weather is pleasant and ideal for outdoor activities. Monsoon season (June-September) offers lush greenery but water activities may be limited."
  },
  {
    question: "What adventure activities are included in the packages?",
    answer: "Our packages typically include white water rafting, kayaking, jungle safari, zip-lining, and trekking. Some resorts also offer bird watching, bonfire nights, and nature walks."
  },
  {
    question: "Are the resorts family-friendly?",
    answer: "Yes! All our featured resorts are family-friendly with activities suitable for all age groups. We have special arrangements for children and elderly guests."
  },
  {
    question: "How do I book a resort?",
    answer: "Simply click the 'Book on WhatsApp' button on any resort page, and you'll be connected directly with our team to confirm your booking and customize your package."
  },
  {
    question: "What is included in the package price?",
    answer: "Packages typically include accommodation, meals (breakfast, lunch, dinner), adventure activities, and safety equipment. Transportation can be arranged on request."
  },
  {
    question: "Is it safe for first-time rafters?",
    answer: "Absolutely! Our experienced guides provide thorough safety instructions and all necessary safety gear. Most activities are designed for beginners as well as experienced adventurers."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about your Dandeli adventure
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border-0 rounded-xl shadow-soft px-6 slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
