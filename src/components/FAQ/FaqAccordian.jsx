import { faqs } from "../../utils/constants.js";
import FaqItem from "./FaqItem";

const FaqAccordian = () => {
  return (
    <section className="max-w-2xl mx-auto mt-10 bg-white shadow-md rounded-md">
        {faqs.map((faq, idx) => (
            <FaqItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
    </section>
  )
}

export default FaqAccordian