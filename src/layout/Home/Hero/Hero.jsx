import {ArrowRight} from 'lucide-react';
import Button from '../../../Components/Button/Button';
const Hero = () => {
  return (
    <section className="pt-14 flex justify-center items-center text-center bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-gradient-4.svg)] bg-center bg-cover">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl bg-gradient-to-r from-white to-[#748298] text-transparent bg-clip-text font-semibold font-monospace  py-2">
          Pitch. Present. Publish.
          {' '}
          <span className="bg-gradient-to-r from-[#ff8c00] to-[#ffb347] bg-clip-text text-transparent">
            All in Markdown.
          </span>
        </h2>
        <p className="text-slate-300 md:text-base line-clamp-3 max-md:px-2 text-center max-w-md mt-2">
          Write slides like you write code — with Markdown. Generate beautiful, responsive presentations in seconds, ready to share, embed, or present live. No design skills required.
        </p>
        <div className="flex justify-center mt-5 gap-4">
          <Button btn_title="Start Creating" icon={<ArrowRight size={34} />} />
          <button className="bg-white/10 border border-white/15 rounded-xl hover:opacity-75 px-6 py-3 text-white">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
