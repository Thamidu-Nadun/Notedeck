import Button from '../../../Components/Button/Button';
const Hero = () => {
  return (
    <div className="pt-14 h-screen w-screen flex justify-center items-center text-center">
      <div className="flex flex-col items-center">
        <h2 className="text-6xl text-gray-800 font-semibold font-monospace">
          No Boring presentation, just be
          {' '}
          <span className="bg-gradient-to-r from-[#ff8c00] to-[#ffb347] bg-clip-text text-transparent">
            cool
          </span>
          .
        </h2>
        <p className="text-xl text-gray-800/50 m-1">
          Tiered of boring presentation, make your presentation more cooler with markdown.
        </p>
        <div className="flex justify-center m-2">
          <Button btn_title="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
