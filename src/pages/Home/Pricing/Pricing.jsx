import {Check, CheckCheck, CircleX} from 'lucide-react';

export default function Pricing () {
  const plans = [
    {
      card_title: 'Free',
      price: '$0/mo',
      short_desc: 'For individuals getting started',
      available_features: [
        'Unlimited web decks',
        '3 exports per month (PDF/HTML)',
        'Core themes (light & dark)',
        'Code highlighting, Mermaid & LaTeX',
        'GitHub/Gist import',
      ],
      not_available_features: [
        'PPTX export',
        'Custom branding & logo',
        'Private/unlisted links',
        'Presenter view',
        'Team workspaces & collaboration',
      ],
    },
    {
      card_title: 'Pro',
      price: '$12/mo',
      short_desc: 'For professionals and small teams',
      available_features: [
        'Unlimited exports (PDF/HTML/PPTX)',
        'Custom logo & brand colors',
        'Private/unlisted links',
        'Presenter view with notes & remote control',
        'Shared team workspace',
        'Collaborative editing & comments',
        'Priority rendering queue',
      ],
      not_available_features: [
        'Advanced SSO integrations (Okta, Azure AD)',
        'On-prem or private cloud deployment',
        'Custom SLA & dedicated support',
      ],
    },
    {
      card_title: 'Enterprise',
      price: 'Contact us',
      short_desc: 'For organizations needing scale & compliance',
      available_features: [
        'Everything in Pro',
        'Advanced SSO (Okta, Azure AD, SAML)',
        'On-prem/private cloud deployment',
        'Custom SLA & dedicated support',
        'Audit logs & compliance tools',
      ],
      not_available_features: [],
    },
  ];

  return (
    <div className="w-screen">
      <div className="py-20 max-w-5xl mx-auto px-4">
        <h1 className="text-center text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl text-white">
          Pricing
        </h1>
        <p className="text-center text-gray-400 md:text-lg mt-2">
          Use it for free for yourself, upgrade when your team needs
          advanced control.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 mt-10">
          {/* Card 1 */}
          {plans.map ((plan, index) => (
            <Card
              key={index}
              card_title={plan.card_title}
              price={plan.price}
              short_desc={plan.short_desc}
              available_features={plan.available_features}
              not_available_features={plan.not_available_features}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const Card = ({
  card_title,
  price,
  short_desc,
  available_features,
  not_available_features,
}) => (
  <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-6">
    <div className="flex flex-col items-center border-b border-gray-300 pb-6">
      <span className="mb-6 text-gray-800">{card_title}</span>
      <span className="mb-3 text-4xl font-medium">{price}</span>
      <span className="text-gray-500">{short_desc}</span>
    </div>
    <div className="space-y-4 py-9">
      {available_features.map ((feature, index) => (
        <Feature key={index} feature={feature} is_available={true} />
      ))}
      {not_available_features.map ((feature, index) => (
        <Feature key={index} feature={feature} is_available={false} />
      ))}
    </div>
  </div>
);

const Feature = ({feature, is_available}) => (
  <div className="flex items-center gap-3">
    <span
      className={`${is_available ? 'bg-[#ffb347]' : 'bg-gray-100/80'} grid size-5 place-content-center rounded-full text-sm text-white`}
    >
      {is_available
        ? <Check size={16} />
        : <CircleX size={16} color="#ffb347" />}
    </span>
    <span className="text-sm text-gray-400">{feature}</span>
  </div>
);
