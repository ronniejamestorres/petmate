import React from "react";

function DashboardGallery() {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 ">
      <img
        className="w-40 h-40 bg-red-500 lg:rounded-full rounded-full  object-cover hover:scale-125"
        src="https://images.unsplash.com/photo-1614633673914-0af3eae06970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
        alt="Image 1"
      />
      <img
        className="w-40 h-40 bg-red-500 lg:rounded-full  object-cover hidden lg:block hover:scale-125"
        src="https://images.unsplash.com/photo-1583512603784-a8e3ea8355b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        alt="Image 2"
      />
      <img
        className="w-40 h-40 bg-red-500 lg:rounded-full object-cover hidden lg:block hover:scale-125 "
        src="https://images.unsplash.com/photo-1583511666372-62fc211f8377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
        alt="Image 3"
      />
      <div className="w-40 h-40 bg-beige3 lg:rounded-full relative hidden lg:block hover:scale-125">
        <div className="w-10 h-10  lg:rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <p className="text-4xl font-bold text-beige1">+</p>
        </div>
      </div>
      <div className="w-40 h-40 bg-beige3 lg:rounded-full relative hidden lg:block hover:scale-125">
        <div className="w-10 h-10  lg:rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <p className="text-4xl font-bold text-beige1">+</p>
        </div>
      </div>
      <div className="w-40 h-40 bg-beige3 lg:rounded-full relative hidden lg:block hover:scale-125">
        <div className="w-10 h-10  lg:rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <p className="text-4xl font-bold text-beige1">+</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardGallery;
