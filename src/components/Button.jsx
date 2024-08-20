const Button = ({ white, text, backwhite, fulleounded, fullwhite }) => {
  let buttonClasses = 'flex items-center font-semibold px-6 py-3 rounded-md hover:scale-105 ';

   if (fullwhite) {
    buttonClasses += 'rounded-3xl bg-transparent border border-active text-white ';
  } else if(fulleounded){
    buttonClasses +="rounded-4xl bg-active text-white   "
  } 
  else if (backwhite) {
    buttonClasses += 'bg-white text-black ';
  } else if (white) {
    buttonClasses += 'text-black bg-transparent ';
  } else {
    buttonClasses += 'bg-active text-white ';
  }

  return <button className={buttonClasses}>{text}</button>;
};

export default Button;
