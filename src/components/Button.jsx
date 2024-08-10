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

// import React from 'react';

// const Button = ({ text, white, backwhite }) => {
//   return (
//     <button
//       className={`
//         flex items-center justify-center font-semibold px-6 py-3 rounded-md
//         ${backwhite ? 'bg-white text-black' : ''}
//         ${white && !backwhite ? 'bg-transparent text-green' : 'bg-active text-white'}
//       `}
//     >
//       {text}
//     </button>
//   );
// };

// export default Button;
