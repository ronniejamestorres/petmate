import React from "react";
import Caroussel from "../components/Carousel";
function ShowOne() {
  return (
    <div className="bg-beige1 h-screen">
      <Caroussel />
      <div className="flex justify-center ">
        <div className="w-1/2 p-8 flex justify-center ">
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
            <img
              className="w-64 h-64 bg-red-500 rounded-full lg:rounded-none object-cover"
              src="https://images.unsplash.com/photo-1614633673914-0af3eae06970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
              alt="Image 1"
            />
            <img
              className="w-64 h-64 bg-red-500 rounded-full lg:rounded-none object-cover hidden lg:block"
              src="https://images.unsplash.com/photo-1583512603784-a8e3ea8355b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt="Image 2"
            />
            <img
              className="w-64 h-64 bg-red-500 rounded-full lg:rounded-none object-cover hidden lg:block "
              src="https://images.unsplash.com/photo-1583511666372-62fc211f8377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
              alt="Image 3"
            />
            <div className="w-64 h-64 bg-yellow-500 hidden lg:block lg:rounded "></div>
            <div className="w-64 h-64 bg-yellow-500 hidden lg:block lg:rounded"></div>
            <div className="w-64 h-64 bg-red-500 hidden lg:block lg:rounded"></div>
          </div>
        </div>
        <div className="w-1/2 p-8 ">
          <div className="w-full h-full bg-orange">ORANGE</div>
        </div>
      </div>
    </div>
  );
}

export default ShowOne;
