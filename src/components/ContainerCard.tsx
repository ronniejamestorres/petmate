import React from "react";

function ContainerCard() {
  return (
    <div className="flex justify-center ">
      <div className="bg-purewhite text-black text-center text-sm rounded-lg border border-beige2 p-8  m-10 lg:text-md lg:p-2 lg:m-4">
        <p>
          <strong>Animal</strong> <br />
          Race-age-weight
        </p>
        <p>
          <strong>Description:</strong> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          ornare auctor metus vel mollis.
        </p>
        <p>
          <strong>Interest</strong> <br />
          <div className="flex flex-wrap justify-center mt-4">
            <div className="m-1">
              <div className="bg-beige3 text-white hover:bg-beige1  rounded-lg px-4 py-2">
                Run
              </div>
            </div>
            <div className="m-1">
              <div className="bg-beige2 text-white hover:bg-beige1 rounded-lg px-4 py-2">
                Swim
              </div>
            </div>
          </div>
        </p>
        <p>
          <strong>Favorite foods</strong> <br />
        </p>
        <div className="flex flex-wrap justify-center mt-4">
          <div className="m-1">
            <div className="bg-beige3 text-white hover:bg-beige1 rounded-lg px-4 py-2">
              Chocolate
            </div>
          </div>
          <div className="m-1">
            <div className="bg-beige2 text-white hover:bg-beige1 rounded-lg px-4 py-2">
              Meat
            </div>
          </div>
          <div className="m-1">
            <div className="bg-beige3 text-white hover:bg-beige1 rounded-lg px-4 py-2">
              Sweet
            </div>
          </div>
          <div className="m-1">
            <div className="bg-beige2 text-white hover:bg-beige1  rounded-lg px-4 py-2">
              Chocolate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContainerCard;
