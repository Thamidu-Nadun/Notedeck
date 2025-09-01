import {ChartArea, Handshake, Rocket} from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function Feature () {
  return (
    <div>
      <h2 className="text-4xl text-white text-center font-sans">
        What we offer
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <img
          className="max-w-2xl w-full"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/card-image-1.png"
          alt=""
        />
        <div className="space-y-6 px-4 md:px-0">
          <FeatureCard
            title="Real-Time Analytics"
            description="Get instant insights into your finances with live dashboards."
            icon={<ChartArea size={28} />}
          />
          <FeatureCard
            title="Seamless Integration"
            description="Connect with popular accounting software like QuickBooks and Xero."
            icon={<Handshake size={28} />}
          />
          <FeatureCard
            title="AI-Powered Insights"
            description="Leverage AI to identify trends and optimize your financial strategies."
            icon={<Rocket size={28} />}
          />
        </div>
      </div>
    </div>
  );
}
