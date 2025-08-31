import React from 'react';

const Button = ({btn_title = 'Click Me!'}) => {
  return (
    <div className="px-3 py-3 bg-gradient-to-r from-[#ff8c00] to-[#ffb347] hover:opacity-85 transition-all duration-300 text-capitalize rounded-xl w-fit font-bold text-white cursor-pointer">
      {btn_title}
    </div>
  );
};

export default Button;
