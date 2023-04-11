import React from 'react';

const About = () => {
  return (
    <div className="bg-beige1 min-h-min flex flex-col">
      {/* Title */}
      <header className="bg-beige shadow-sm">
        <div className=" mx-auto py-8 px-8 flex justify-center items-center">
          <h1 className="font-semibold text-beige3 text-2xl">Discover friendship, unleash love, and meet furry pals with PETMATE</h1>
          
        </div>
      </header>
      
      {/* Description de l'app */}
      <div className=" mx-auto mt-8 mb-20 flex flex-col sm:flex-row justify-center gap-4">
        <div className="bg-beige1 shadow-md rounded-lg p-6 w-full sm:w-1/3">
          <h2 className="font-bold text-beige3 text-lg mb-4">Pet profiles</h2>
          <p className="text-gray-700">Create a profile for your pet, upload photos and describe their personality. The more information you add, the easier it will be to find a perfect match!</p>
        </div>
        <div className="bg-beige1 shadow-md rounded-lg p-6 w-full sm:w-1/3">
          <h2 className="font-bold text-beige3 text-lg mb-4">Matching algorithm</h2>
          <p className="text-gray-700">Our matching algorithm uses information in pet profiles to find potential matches. It analyses interests, location and personality compatibility to match your pet with other pets that are right for them..</p>
        </div>
        <div className="bg-beige1 shadow-md rounded-lg p-6 w-full sm:w-1/3">
          <h2 className="font-bold  text-beige3 text-lg mb-4">Instant messaging</h2>
          <p className="text-gray-700">Once you find a pet you like, you can chat with the owner through our instant messaging feature - exchange photos and details about your pets to see if there's a spark!</p>
        </div>
        
      </div>
      
      
      
      
    </div>
  );
};

export default About;

