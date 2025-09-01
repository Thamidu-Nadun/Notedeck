import {ChevronDown} from 'lucide-react';
import {Fragment, useState} from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState (null);
  const faqsData = [
    {
      question: 'Lightning-Fast Performance',
      answer: 'Built with speed — minimal load times and optimized rendering.',
    },
    {
      question: 'Fully Customizable Components',
      answer: 'Easily adjust styles, structure, and behavior to match your project needs.',
    },
    {
      question: 'Responsive by Default',
      answer: 'Every component are responsive by default — no extra CSS required.',
    },
    {
      question: 'Tailwind CSS Powered',
      answer: 'Built using Tailwind utility classes — no extra CSS or frameworks required.',
    },
    {
      question: 'Dark Mode Support',
      answer: 'All components come ready with light and dark theme support out of the box.',
    },
  ];
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center text-center text-slate-700 px-3">
        <p className="text-base font-medium text-slate-100">FAQ</p>
        <h1 className="text-3xl md:text-4xl font-semibold mt-2 text-slate-100">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-slate-100/70 mt-4 max-w-sm">
          Proactively answering FAQs boosts user confidence and cuts down on support tickets.
        </p>
        <div className="max-w-xl w-full mt-6 flex flex-col gap-4 items-start text-left">
          {faqsData.map ((faq, index) => (
            <div key={index} className="flex flex-col items-start w-full">
              <div
                className="flex items-center justify-between w-full cursor-pointer bg-amber-50 border border-slate-200 p-4 rounded"
                onClick={() =>
                  setOpenIndex (openIndex === index ? null : index)}
              >
                <h2 className="text-sm">{faq.question}</h2>
                <ChevronDown size={20} />
              </div>
              <p
                className={`text-sm text-slate-100/80 px-4 transition-all duration-500 ease-in-out ${openIndex === index ? 'opacity-100 max-h-[300px] translate-y-0 pt-4' : 'opacity-0 max-h-0 -translate-y-2'}`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
