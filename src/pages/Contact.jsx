import Navbar from "../components/Navbar";
import Hospital  from "../assets/Hospital.png";
import ContactUs from "../components/ContactUs";
import Search from "../components/Search";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="bg-[#ececec] w-full h-auto ">
      <Navbar />
      <img src={Hospital}  className="mt-3  w-full h-[93vh]"   />      
      <ContactUs/>
      <Search/>
      <Footer/>
    </div>
  );
};

export default Contact;
