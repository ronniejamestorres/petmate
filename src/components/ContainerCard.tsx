import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Characteristic {
  animal: string;
  age: number;
  race: string;
  weight: number;
  interests: string[];
  favoriteFoods: string[];
}

interface Data {
  characteristics: Characteristic;
  description: string;
}

function ContainerCard() {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://wave.nodestarter.eu:4000/users/getOne/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 
  return (
    <div className="flex justify-center ">
      <div className="bg-purewhite text-black text-center text-sm rounded-lg border border-beige2 p-8  m-10 lg:text-md lg:p-2 lg:m-4">
        <p>
          <strong>Animal</strong> <br />
          {data?.characteristics.animal} -{" "}
          <span>{data?.characteristics.age} years old</span>-{" "}
          <span>{data?.characteristics.race}</span>-{" "}
          <span>{data?.characteristics.weight} kg</span>
        </p>
        <p>
          <strong>Description</strong> <br />
          {data?.description}
        </p>
        <p>
          <strong>Interest</strong> <br />
          <div className="flex flex-wrap justify-center mt-4">
            {data?.characteristics.interests.map((interest, index) => (
              <div className="m-1" key={index}>
                <div className="bg-beige3 text-white hover:bg-beige1  rounded-lg px-4 py-2">
                  {interest}
                </div>
              </div>
            ))}
          </div>
        </p>
        <p>
          <strong>Favorite foods</strong> <br />
          <div className="flex flex-wrap justify-center mt-4">
            {loading ? (
              <h1>Loading</h1>
            ) : (
              data?.characteristics.favoriteFoods.map((food, index) => (
                <div key={index} className="m-1">
                  <div className="bg-beige3 text-white hover:bg-beige1  rounded-lg px-4 py-2">
                    {food}
                  </div>
                </div>
              ))
            )}
          </div>
        </p>
      </div>
    </div>
  );
}

export default ContainerCard;
