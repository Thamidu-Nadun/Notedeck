import {ChartArea, Handshake, Rocket} from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function Feature () {
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-white text-center font-semibold font-sans">
        What we offer
      </h2>
      <p className="text-center text-gray-400 md:text-lg mt-2">
        Turn your markdown notes into a beautiful, interactive presentation.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <img
          className="max-w-2xl w-full"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/card-image-1.png"
          alt=""
        />
        <div className="space-y-6 px-4 md:px-0">
          <FeatureCard
            title="Ready to go presentations"
            description="Create and customize presentations in minutes."
            icon={<ChartArea size={28} />}
          />
          <FeatureCard
            title="Syntax Highlighting"
            description="Easily add code snippets with syntax highlighting for over 100 languages."
            icon={<Handshake size={28} />}
          />
          <FeatureCard
            title="Export to your favorite format"
            description="Export your presentations to PDF, HTML, or even as a powerpoint."
            icon={<Rocket size={28} />}
          />
        </div>
      </div>
    </div>
  );
}
