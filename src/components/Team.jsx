import team1 from '../assets/team1.png';
import icons from '../assets/icons.png';
import team2 from '../assets/team2.png';
import team3 from '../assets/team3.png';
import team4 from '../assets/team4.png';  
import team5 from '../assets/team5.png';
import team6 from '../assets/team6.png';

const teamMembers = [
  {
    image: team1,
    name: "John Carter",
    role: "CEO & CO-FOUNDER",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi."
  },
  {
    image: team2,
    name: "Sophie Moore",
    role: "Dental Specialist",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi."
  },
  {
    image: team3,
    name: "Sophie Moore",
    role: "Orthopedic",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi."
  },
  {
    image: team4,
    name: "Andy Smith",
    role: "Brain Surgeon",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi."
  },
  {
    image: team5,
    name: "Lily Woods",
    role: "Heart Specialist",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi."
  },
  {
    image: team6,
    name: "Patrick Meyer",
    role: "Eye Specialist",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi."
  },
];

const Team = () => {
  return (
   <div className="w-full py-8 px-4 sm:px-6 md:px-10 bg-[#ECECEC]">
  <div className="w-full max-w-[1240px] mx-auto p-4 sm:p-6 md:p-8">
    <div className="text-center w-full md:w-[500px] mx-auto mb-8">
      <h2 className="font-bold text-2xl md:text-3xl text-active py-4">
        Meet our team members
      </h2>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat
      </p>
    </div>
    {/* Responsive grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="w-full h-auto bg-white rounded-2xl flex flex-col items-center justify-evenly p-6 transform transition-transform duration-300 hover:scale-105"
        >
          <img src={member.image} alt={member.name} />
          <div className="flex flex-col items-center text-center py-5">
            <h3 className="text-lg font-bold text-active">{member.name}</h3>
            <p className="text-black font-semibold text-[15px] uppercase">
              {member.role}
            </p>
            <p className="text-gray-600 text-sm pt-4">
              {member.description}
            </p>
          </div>
          <img src={icons} alt="icons" width={170} />
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Team;
