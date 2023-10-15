// Faqs.js
import React from "react";
import FaqItem from "./faqItem"; // Adjust the path to match your folder structure

const Faqs = () => {
  return (
    <div className="min-h-[100vh] w-[100vw] relative z-10" id="faqs">
      <div
        id="proxima"
        className="uppercase text-[16px] md:text-[10px] mx-[13%] md:mx-[10%] text-[#B7AB98] mt-32 mb-10 tracking-[7px]"
      >
        FAQs
      </div>
      <FaqItem
        index={1}
        question="What is Cookoff-8.0?"
        answer="A competitive coding event with increasing rounds of difficulty and elimination until there is an ultimate winner. It is an individual event which requires skill, problem solving and competence."
      />
      <FaqItem
        index={1}
        question="Will it be a team event?"
        answer="No, it is an individual participant event and not a team based event."
      />
      <FaqItem
        index={2}
        question="Is there a registration fee?"
        answer="It is ₹150 (incl GST)"
      />
      <FaqItem
        index={3}
        question="How can I register?"
        answer="Registrations can be done on the gravitas portal itself."
      />
      <FaqItem
        index={4}
        question="What languages are supported?"
        answer="Java, C++, C, Python and other not so popular languages"
      />
      <FaqItem
        index={5}
        question=" Can we bring our laptops?"
        answer="Yes, your own devices will have to be brought."
      />
      <FaqItem
        index={6}
        question="Will CookOff be online?"
        answer="No, CookOff will be held offline in Anna Auditorium on 24th september."
      />
      <FaqItem
        index={7}
        question="How long is the event?"
        answer="The event is 8 hours long."
      />
      <FaqItem
        index={8}
        question="When is CookOff - 8.0?"
        answer="CookOff will be held on 24th September."
      />
      <FaqItem
        index={9}
        question="I have a basic knowledge about coding. Can I still participate?"
        answer="Yes, the contest will have problems ranging from beginner to intermediate and further advanced levels. Anyone interested in programming with basic knowledge in any one programming language can participate."
      />
      <FaqItem
        index={10}
        question="Am I required to download any software?"
        answer="The event will be held on our portal, you don't need any external software"
      />
      <FaqItem
        index={11}
        question="Will I get a certificate?"
        answer="Yes certificates will be provided."
      />
      <FaqItem
        index={12}
        question="If I still have some doubts, how do I get them resolved?"
        answer="Please contact us on any of our social handles to get your doubts resolved."
      />
    </div>
  );
};

export default Faqs;
