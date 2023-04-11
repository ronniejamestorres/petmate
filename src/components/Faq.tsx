import React from "react";
import '../App.css'
const Faqs = () => {
  return (
    <section className="bg-beige2 text-gray-700">
      <div className="flex flex-col justify-center  p-4 mx-auto md:p-8">
        <p className=" p-2 text-sm font-medium tracking-wider text-center uppercase">
          How it works
        </p>
        <h2 className=" text-beige1 mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-beige3">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What is the purpose of PETMATE app?
            </summary>
            <div className="px-4 pb-4">
              <p>
                The purpose of PETMATE app is to help animals find compatible
                friends and playmates in their area.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How does PETMATE app work?
            </summary>
            <div className="px-4 pb-4">
              <p>
                The PETMATE app works by allowing pet owners to create profiles
                for their animals and then swipe through profiles of other
                animals in their area. If two animals "swipe left" on each
                other's profiles, it's a match and their owners can arrange for
                them to meet up for playdates or other activities.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Can animals of different species use PETMATE app?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Yes, animals of different species can use the animal Tinder app
                to find friends to play and socialize with.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Can animal shelters use PETMATE app to help their animals make
              friends and find homes?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Yes, animal shelters can create profiles for their animals on
                the app to help them find loving homes and make friends with
                other animals in the area.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
