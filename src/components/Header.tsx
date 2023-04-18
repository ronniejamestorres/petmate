import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import { IconButton } from "@mui/material";
import logoImage from "../images/petmate-newlogo-01.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-full absolute h-[80px] bg-beige1 border-b shadow-md md:px-3">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <img src={logoImage} alt="Logo" className="h-[25px]" />

        <div className="flex items-center">
          <Link to="/dashboardtwo">
            <IconButton>
              <PersonIcon />
            </IconButton>
          </Link>

          <Link to="/Match">
            {/* si on clique sur l'icône on va dans le chat*/}
            <IconButton>
              <ChatIcon />
            </IconButton>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
