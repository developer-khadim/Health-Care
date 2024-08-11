const Button = ({ white, text, backwhite,full , fullwhite }) => {
  let buttonClasses = 'flex items-center  font-semibold px-6 py-3 rounded-md hover:scale-105 ';

  if (backwhite) {
    buttonClasses += 'bg-white text-black  ';
  } else if (white) {
    buttonClasses += 'text-black bg-transparent ';
  }else if(full){
   buttonClasses += 'rounded-full bg-active text-white py-2';
  }else if(fullwhite){
    buttonClasses += 'rounded-full bg-transparent border border-active text-white';
  }
  else {
    buttonClasses += 'bg-active text-white ';
  }

  return <button className={buttonClasses}>{text}</button>;
};

export default Button;

