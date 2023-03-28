import React, { useState } from "react";
import backgroundImage from "../../public/petmate-background-01.svg";
import Header from "../components/Header";

interface Props {
  onPictureAdded: () => void;
}

const Dashboard: React.FC<Props> = ({ onPictureAdded }) => {
  const [pictures, setPictures] = useState<File[]>([]);
  const [description, setDescription] = useState("");
  const [age, setAge] = useState("");
  const [animal, setAnimal] = useState("");
  const [favoriteFoods, setFavoriteFoods] = useState("");
  const [interests, setInterests] = useState("");
  const [race, setRace] = useState("");
  const [weight, setWeight] = useState("");
  const [date, setDate] = useState("");

  const handlePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileList = event.target.files;
      const fileArray = Array.from(fileList);
      setPictures([...pictures, ...fileArray]);
    }
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const handleAnimalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnimal(event.target.value);
  };

  const handleFavoriteFoodsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFavoriteFoods(event.target.value);
  };

  const handleInterestsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInterests(event.target.value);
  };

  const handleRaceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRace(event.target.value);
  };

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (pictures.length > 0) {
      try {
        const formData = new FormData();
        pictures.forEach((picture) => {
          formData.append("pictures", picture);
        });
        const fullDescription = `${description}, Age: ${age}, Animal: ${animal}, Favorite Foods: ${favoriteFoods}, Interests: ${interests}, Race: ${race}, Weight: ${weight}, Date: ${date}`;
        formData.append("description", fullDescription);

        // send the formData to the server here
        const response = await fetch(``, {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          onPictureAdded();
          setPictures([]);
          setDescription("");
          setAge("");
          setAnimal("");
          setFavoriteFoods("");
          setInterests("");
          setRace("");
          setWeight("");
          setDate("");
        } else {
          throw new Error("Failed to update database.");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleDelete = (index: number) => {
    const newPictures = [...pictures];
    newPictures.splice(index, 1);
    setPictures(newPictures);
  };

  return (
    <div
      className="h-screen bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Header />
      <div className="p-4">
        <div className="text-4xl font-bold text-center m-4">Dashboard</div>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {pictures.map((picture, index) => (
              <div key={index} style={{ marginRight: "10px" }}>
                <img
                  src={URL.createObjectURL(picture)}
                  alt="Preview"
                  style={{ maxHeight: "50px", minWidth: "100%" }}
                />
                <button
                  className="bg-beige1 rounded-full w-20 h-8 m-2 items-center"
                  type="button"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            ))}
            <div>
              <label htmlFor="picture"></label>
              <input
                type="file"
                id="picture"
                onChange={handlePictureChange}
                multiple
              />
            </div>
          </div>
          <div className="border border-black rounded-3xl p-4 mt-4">
            <div>
              <label htmlFor="description">Description:</label>
              <input
                className="border"
                type="text"
                id="description"
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>
            <div>
              <label htmlFor="age">Age:</label>
              <input
                className="border"
                type="text"
                id="age"
                value={age}
                onChange={handleAgeChange}
              />
            </div>
            <div>
              <label htmlFor="animal">Animal:</label>
              <input
                className="border"
                type="text"
                id="animal"
                value={animal}
                onChange={handleAnimalChange}
              />
            </div>
            <div>
              <label htmlFor="favoriteFoods">Favorite Foods:</label>
              <input
                className="border"
                type="text"
                id="favoriteFoods"
                value={favoriteFoods}
                onChange={handleFavoriteFoodsChange}
              />
            </div>
            <div>
              <label htmlFor="interests">Interests:</label>
              <input
                className="border"
                type="text"
                id="interests"
                value={interests}
                onChange={handleInterestsChange}
              />
            </div>
            <div>
              <label htmlFor="race">Race:</label>
              <input
                className="border"
                type="text"
                id="race"
                value={race}
                onChange={handleRaceChange}
              />
            </div>
            <div>
              <label htmlFor="weight">Weight:</label>
              <input
                className="border"
                type="text"
                id="weight"
                value={weight}
                onChange={handleWeightChange}
              />
            </div>
            <div>
              <label htmlFor="date">Date:</label>
              <input
                className="border"
                type="text"
                id="date"
                value={date}
                onChange={handleDateChange}
              />
            </div>
          </div>

          <div>
            <button
              className="bg-beige1 rounded-full w-44 h-10 items-center m-4 "
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
