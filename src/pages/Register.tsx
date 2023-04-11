import SubscribeOne from "../components/SubscribeOne";
import kittenImage from "../images/pngegg.png";
import logoImage from "../images/petmate-newlogo-01.svg";
import backgroundImage from "../images/petmate-background-01.svg";
import NavbarRegister from "../components/NavbarRegister";

const Register = () => {
  return (
    <div
      className="h-screen bg-center bg-repeat  bg-beige1 overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div>
        <NavbarRegister />
      </div>
      <div
        className="h-screen bg-center bg-repeat  bg-beige1 "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className=" flex justify-center ">
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2  justify-items-center items-center  lg:mt-40">
            <div className=" lg:w-96 lg:h-auto bg-white lg:bg-white rounded-xl p-4 justify-center flex flex-col items-center shadow-xl  ">
              <div>
                <SubscribeOne />
              </div>
            </div>
            <div className=" lg:w-96  lg:h-full lg:bg-beige2 rounded-xl  flex flex-col justify-center items-center lg:shadow-xl  ">
              <img src={kittenImage} alt="Kitten" className="scale-150  " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
