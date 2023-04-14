import React from "react";

function DashboardCard() {
  return (
    <div className="justify-center h-screen  ">
      <div className=" m-2  ">
        <p className=" text-3xl">Animal</p>
        <p>Race :</p>
        <p>age :</p>
        <p>weight :</p>
      </div>
      <div className="m-2">
        <p className=" text-3xl">Description</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          ornare auctor metus vel mollis. Curabitur ornare auctor metus vel
          mollis.
        </p>
      </div>
      <div className="m-2">
        <p className=" text-3xl">Interests</p>
        <div className="flex flex-wrap  ">
          <div className="m-1">
            <div className="bg-brown text-white hover:bg-beige1  rounded-lg px-4 py-2">
              Run
            </div>
          </div>
          <div className="m-1">
            <div className="bg-beige3 text-white hover:bg-beige1 rounded-lg px-4 py-2">
              Swim
            </div>
          </div>
          <div className="m-1">
            <div className="bg-beige2 text-white hover:bg-beige1 rounded-lg px-4 py-2">
              Sleep
            </div>
          </div>
        </div>
      </div>
      <div className="m-2">
        <p className=" text-3xl">Favorite Foods</p>

        <div className="flex flex-wrap  ">
          <div className="m-1">
            <div className="bg-brown text-white hover:bg-beige1 rounded-lg px-4 py-2">
              Chocolate
            </div>
          </div>
          <div className="m-1">
            <div className="bg-beige3 text-white hover:bg-beige1 rounded-lg px-4 py-2">
              Meat
            </div>
          </div>
          <div className="m-1">
            <div className="bg-beige2 text-white hover:bg-beige1 rounded-lg px-4 py-2">
              Sweet
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
