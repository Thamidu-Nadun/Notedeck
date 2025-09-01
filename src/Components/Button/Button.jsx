import React from 'react';

const Button = ({btn_title = 'Click Me!', icon}) => {
  return (
    <div className="flex gap-1 items-center px-3 py-3 bg-gradient-to-r from-[#ff8c00] to-[#ffb347] hover:opacity-85 transition-all duration-300 text-capitalize rounded-xl w-fit font-bold text-white cursor-pointer">
      {btn_title}
      {icon && <span className="inline-block ml-2">{icon}</span>}
    </div>
  );
};

export default Button;
