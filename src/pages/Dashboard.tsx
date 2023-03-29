import React, { useState } from "react";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ name, email, age, country, favoriteColor });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <label>
        Country:
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </label>
      <label>
        Favorite color:
        <input
          type="text"
          value={favoriteColor}
          onChange={(e) => setFavoriteColor(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Dashboard;
