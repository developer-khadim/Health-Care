import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import rightarrow from "../assets/rightarrow.png";
import tooth from "../assets/teeth.png";
import img2 from '../assets/Container.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from  '../assets/img6.jpg';

const Services = () => {
  return (
    <>
      <div className="w-full py-8 px-4 sm:px-6 md:px-10 bg-[#ECECEC]">
        <div className="w-full max-w-[1240px] mx-auto p-4 sm:p-6 md:p-8">
          <div className="text-center w-full md:w-[500px] mx-auto mb-8">
            <h2 className="font-bold text-2xl md:text-3xl text-active py-4">
              Services we provide
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat
              gravida malesuada quam commodo id integer nam.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Card className="w-full sm:w-80 md:w-96 rounded-xl flex flex-col items-center pt-5 transform transition-transform duration-300 hover:scale-105">
              <CardHeader color="blue-gray" className="relative h-56">
                <img src={tooth} alt="card-image" className="h-full w-full object-cover" />
              </CardHeader>
              <CardBody className="text-left">
                <Typography className="mt-2 mb-2 font-bold text-active text-xl md:text-2xl">
                  Dental treatments
                </Typography>
                <Typography className="text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </Typography>
                <p className="flex justify-start items-center text-active font-bold mt-6">
                  Learn more <img src={rightarrow} className="w-[20px] ml-2" />
                </p>
              </CardBody>
            </Card>
            <Card className="w-full sm:w-80 md:w-96 rounded-xl flex flex-col items-center pt-5 transform transition-transform duration-300 hover:scale-105">
              <CardHeader color="blue-gray" className="relative h-56">
                <img src={img2} alt="card-image" className="h-full w-full object-cover" />
              </CardHeader>
              <CardBody className="text-left">
                <Typography className="mt-2 mb-2 font-bold text-active text-xl md:text-2xl">
                  Bones treatments
                </Typography>
                <Typography className="text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </Typography>
                <p className="flex justify-start items-center text-active font-bold mt-6">
                  Learn more <img src={rightarrow} className="w-[20px] ml-2" />
                </p>
              </CardBody>
            </Card>
            <Card className="w-full sm:w-80 md:w-96 rounded-xl flex flex-col items-center pt-5 transform transition-transform duration-300 hover:scale-105">
              <CardHeader color="blue-gray" className="relative h-56">
                <img src={img3} alt="card-image" className="h-full w-full object-cover" />
              </CardHeader>
              <CardBody className="text-left">
                <Typography className="mt-2 mb-2 font-bold text-active text-xl md:text-2xl">
                  Diagnosis
                </Typography>
                <Typography className="text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                </Typography>
                <p className="flex justify-start items-center text-active font-bold mt-6">
                  Learn more <img src={rightarrow} className="w-[20px] ml-2" />
                </p>
              </CardBody>
            </Card>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center py-5 items-center">
            <Card className="w-full sm:w-80 md:w-96 rounded-xl flex flex-col items-center pt-5 transform transition-transform duration-300 hover:scale-105">
              <CardHeader color="blue-gray" className="relative h-56">
                <img src={img4} alt="card-image" className="h-full w-full object-cover" />
              </CardHeader>
              <CardBody className="text-left">
                <Typography className="mt-2 mb-2 font-bold text-active text-xl md:text-2xl">
                  Cardiology
                </Typography>
                <Typography className="text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </Typography>
                <p className="flex justify-start items-center text-active font-bold mt-6">
                  Learn more <img src={rightarrow} className="w-[20px] ml-2" />
                </p>
              </CardBody>
            </Card>
            <Card className="w-full sm:w-80 md:w-96 rounded-xl flex flex-col items-center pt-5 transform transition-transform duration-300 hover:scale-105">
              <CardHeader color="blue-gray" className="relative h-56">
                <img src={img5} alt="card-image" className="h-full w-full object-cover" />
              </CardHeader>
              <CardBody className="text-left">
                <Typography className="mt-2 mb-2 font-bold text-active text-xl md:text-2xl">
                  Surgery
                </Typography>
                <Typography className="text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </Typography>
                <p className="flex justify-start items-center text-active font-bold mt-6">
                  Learn more <img src={rightarrow} className="w-[20px] ml-2" />
                </p>
              </CardBody>
            </Card>
            <Card className="w-full sm:w-80 md:w-96 rounded-xl flex flex-col items-center pt-5 transform transition-transform duration-300 hover:scale-105">
              <CardHeader color="blue-gray" className="relative h-56">
                <img src={img6} alt="card-image" className="h-full w-full object-cover rounded-xl " />
              </CardHeader>
              <CardBody className="text-left">
                <Typography className="mt-2 mb-2 font-bold text-active text-xl md:text-2xl">
                  Eye care
                </Typography>
                <Typography className="text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                </Typography>
                <p className="flex justify-start items-center text-active font-bold mt-6">
                  Learn more <img src={rightarrow} className="w-[20px] ml-2" />
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
