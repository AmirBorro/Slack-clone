import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import { useStateValue } from "../../StateProvider.js";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header___avatar" alt={user?.displayName} src={user?.photoURL} />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search Slack Clone"></input>
      </div>
      <div className="header__right">
        <HelpOutlineOutlinedIcon />
      </div>
    </div>
  );
}

export default Header;
