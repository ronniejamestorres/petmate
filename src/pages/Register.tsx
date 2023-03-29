import SubscribeOne from "../components/SubscribeOne";

import logoImage from "../images/petmate-newlogo-01.svg";
import backgroundImage from "../images/petmate-background-01.svg";

const Register = () => {
  return (
    <div
      className="h-screen bg-center bg-no-repeat bg-cover bg-beige1"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex justify-center pt-10">
        <img src={logoImage} alt="Logo" className="w-60 m-4" />
      </div>
      <div id="" className="flex items-center justify-center mt-10 ">
        <div id="" className="flex  justify-center">
          <div>
            <SubscribeOne />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
