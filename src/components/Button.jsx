const Button = ({ white, text, backwhite,full }) => {
  let buttonClasses = 'flex items-center  font-semibold px-6 py-3 rounded-md hover:scale-105 ';

  if (backwhite) {
    buttonClasses += 'bg-white text-black  ';
  } else if (white) {
    buttonClasses += 'text-black bg-transparent ';
  }else if(full){
   buttonClasses += 'rounded-3xl bg-active text-white py-2';
  }
  else {
    buttonClasses += 'bg-active text-white ';
  }

  return <button className={buttonClasses}>{text}</button>;
};

export default Button;

