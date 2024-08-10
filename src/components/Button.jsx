import React from 'react';

const Button = ({ white, text, backwhite }) => {
  let buttonClasses = 'flex items-center  font-semibold px-6 py-3 rounded-md hover:scale-105 ';

  if (backwhite) {
    buttonClasses += 'bg-white text-black  ';
  } else if (white) {
    buttonClasses += 'text-green bg-transparent ';
  } else {
    buttonClasses += 'bg-active text-white ';
  }

  return <button className={buttonClasses}>{text}</button>;
};

export default Button;
