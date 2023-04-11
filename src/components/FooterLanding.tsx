import React from "react";
import logoImage from "../images/petmate-newlogo-01.svg";
import { FaInstagram } from "react-icons/fa";
import "../App.css";

const FooterLanding: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFF] py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0">
        <div className="col-span-2">
          <img src={logoImage} className="h-[25px]" alt="Petmate Logo" />
          <h3 className="text-2xl font-semibold mt-10">Contact Us</h3>
          <h3 className="py-2 text-[#6D737A]">Call : +123 400 123</h3>
          <h3 className="py-2 text-[#6D737A]">
            Rue des Sables <br></br>1000 Brussels,Belgium.
          </h3>
          <h3 className="py-2 text-[#363A3D]">Email: example@mail.com</h3>
          <div className="flex gap-4 py-4">
            <div className="p-4 bg-[#ecdebc] rounded-xl">
              <FaInstagram size={25} style={{ color: "#d4B184" }} />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Explore</h3>
          <ul className="py-6 text-[#6D737A]">
            <li className="py-2">Home</li>
            <li className="py-2">About</li>
            <li className="py-2">Testimonials</li>
            <li className="py-2">FAQ</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Company</h3>
          <ul className="py-6 text-[#6D737A]">
            <li className="py-2">Privacy</li>
            <li className="py-2">Terms of Service</li>
          </ul>
        </div>

        <div className="max-[780px]:col-span-2">
          <h3 className="text-2xl font-semibold">Newsletter</h3>
          <h3 className="py-2 text-[#6D737A]">
            Join our community of animal lovers and subscribe to our newsletter
            on the PETMATE app!<br></br>{" "}
            Receive news, tips, inspiring stories, and
            more about the most adorable animals on the planet directly to your
            inbox.
          </h3>
          <form className="py-4">
            <input
              className="bg-[#F2F3F4] p-4 w-full rounded-full"
              placeholder="Email here"
            />
            <button className="max-[780px]:w-full my-4 px-5 py-3 rounded-full bg-beige2 text-[#FFFF] font-medium">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FooterLanding;
