function DashboardCard() {
  return (
    <>
      <div className=" m-2  ">
        <p>Animal :</p>
        <p>Race :</p>
        <p>age :</p>
        <p>weight :</p>
      </div>
      <div className="m-2">
        <p className=" text-xl">Description</p>
        <p>Lorem ipsum dolor sit amet,</p>
      </div>
      <div className="m-2">
        <p className=" text-xl">Interests</p>
        <div className="flex flex-wrap  ">
          <div className="m-1">
            <div className="    ">Run</div>
          </div>
          <div className="m-1">
            <div className="   ">Swim</div>
          </div>
          <div className="m-1">
            <div className="   ">Sleep</div>
          </div>
        </div>
      </div>
      <div className="m-2">
        <p className=" text-xl">Favorite Foods</p>

        <div className="flex flex-wrap  ">
          <div className="m-1">
            <div className="   ">Chocolate</div>
          </div>
          <div className="m-1">
            <div className="   ">Meat</div>
          </div>
          <div className="m-1">
            <div className="   ">Sweet</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardCard;
