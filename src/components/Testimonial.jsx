import team1 from "../assets/pic.png";
import team2 from "../assets/pic2.png";
import team3 from "../assets/pic3.png";

const teamMembers = [
  {
    image: team1,
    name: "John Carter",
    role: "CEO at Google",
    tagline: "“An amazing service”",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.",
  },
  {
    image: team2,
    name: "Sophie Moore",
    role: "MD at Facebook",
    tagline: "“One of a kind service”",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.",
  },
  {
    image: team3,
    name: "Andy Smith",
    role: "CEO Dot Austere",
    tagline: "“The best service”",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.",
  },
];

const Testimonial = () => {
  return (
    <div className="w-full py-8 px-4 sm:px-6 md:px-10 bg-[#ECECEC]">
      <div className="w-full max-w-[1240px] mx-auto p-4 sm:p-6 md:p-8">
        <div className="text-center w-full md:w-[500px] mx-auto mb-8">
          <h2 className="font-bold text-2xl md:text-3xl text-active py-4">
            Testimonial
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
              className="w-full h-auto bg-white rounded-2xl flex flex-col items-start justify-evenly p-6 transform transition-transform duration-300 hover:scale-105"
            >
              <img src={member.image} alt={member.name} />
              <div className="flex flex-col items-start text-left py-5">
                <p className="text-black font-semibold text-[15px] uppercase">
                  {member.tagline}
                </p>
                <p className="text-gray-600 text-sm pt-4">
                  {member.description}
                </p>
              </div>
              <div className="flex flex-col justify-start items-start">
                <h3 className="text-lg font-bold text-left text-active">
                  {member.name}
                </h3>
                <p className="text-left">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
