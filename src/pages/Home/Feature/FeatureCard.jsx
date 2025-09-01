const FeatureCard = ({title, description, icon}) => (
  <div
    className={`flex items-center justify-center rounded-xl py-4 pr-4 gap-6 max-w-md brand-color border border-[#ffb347] hover:bg-[#ffb347] group transition-colors duration-150 cursor-pointer`}
  >
    <div className="p-6 aspect-square group-hover:text-black">
      {icon}
    </div>
    <div className="space-y-2">
      <h3 className="text-base font-semibold text-gray-100 group-hover:text-black">
        {title || 'Customizable Reports'}
      </h3>
      <p className="text-sm text-gray-100/75 group-hover:text-black/75">
        {description ||
          'Export professional, audit-ready financial reports for tax or internal review.'}
      </p>
    </div>
  </div>
);

export default FeatureCard;
