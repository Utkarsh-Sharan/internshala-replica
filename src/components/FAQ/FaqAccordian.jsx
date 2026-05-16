import { faqs } from "../../utils/constants.js";
import FaqItem from "./FaqItem";

const FaqAccordian = () => {
  return (
    <section className="flex flex-col justify-center items-center">
        <h4 className="border border-blue-500 rounded-md px-4 py-1 text-blue-500 mt-10">Frequently Asked Questions</h4>
        <section className="max-w-2xl mx-auto mt-10 bg-white shadow-md rounded-md">
            {faqs.map((faq, idx) => (
                <FaqItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
        </section>
    </section>
  )
}

export default FaqAccordian