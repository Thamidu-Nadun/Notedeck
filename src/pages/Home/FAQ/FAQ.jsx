import {ChevronDown} from 'lucide-react';
import {Fragment, useState} from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState (null);
  const faqsData = [
    {
      question: 'Can I turn my Markdown into slides quickly?',
      answer: 'Yes! Just upload or paste your Markdown, and you’ll get a ready-to-present slide deck instantly.',
    },
    {
      question: 'Can I export my presentation to other formats?',
      answer: 'Absolutely. You can export to HTML, PDF, or PPTX so you can share or present anywhere.',
    },
    {
      question: 'Can I work with my team on presentations?',
      answer: 'Yes! Our Pro and Enterprise plans let you collaborate in shared workspaces and leave comments in real-time.',
    },
    {
      question: 'Does it support diagrams and code?',
      answer: 'Definitely. You can include Mermaid diagrams, LaTeX math, and syntax-highlighted code blocks in your slides.',
    },
    {
      question: 'Will my slides work on mobile devices?',
      answer: 'Yes, all presentations are responsive, so they look great on phones, tablets, and desktops.',
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
