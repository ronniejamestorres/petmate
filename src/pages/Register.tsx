import SubscribeOne from "../components/SubscribeOne";
import Logo from "../components/Logo";
import backgroundImage from "../../public/petmate-background-01.svg";

const Register = () => {
  return (
    <div
      className="h-screen bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className=" h-screen">
        <div className="flex-1 bg-beige h-full flex flex-col justify-center">
          <div className="flex justify-center items-center">
            <Logo className="h-24 m-4" />
          </div>
          <div id="" className="flex items-center justify-center">
            <div id="" className="flex items-center justify-center">
              <div>
                <SubscribeOne />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
