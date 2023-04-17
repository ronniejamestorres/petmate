import React from "react";

import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";

import { IconButton } from "@mui/material";
import logoImage from "../images/petmate-newlogo-01.svg";

import { Link } from "react-router-dom";

const Header = () => {
  {
    /*const [user, setUser] = React.useState<any>(null);

  React.useEffect(() => {
    axios.get('http://wave.nodestarter.eu:4000/users/getall')
    .then((res) => {
      setUser(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

console.log(user)*/
  }

  return (
    <div className="flex justify-between items-center border-b border-gray-400 pb-2 bg-beige1 ">
      <Link to="/dashboardtwo">
        <IconButton>
          <PersonIcon />
        </IconButton>
      </Link>

      <img src={logoImage} className="h-9 object-contain" alt="logo" />

      <Link to="/chats">
        {" "}
        {/* si on clique sur l'icône on va dans le chat*/}
        <IconButton>
          <ChatIcon />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
