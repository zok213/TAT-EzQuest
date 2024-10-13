import React from "react";
import { FaSun, FaMoon, FaCog } from "react-icons/fa";
import { Button, Flex } from "antd";
import './nav.css';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <div className="button">
        <div className="text">GPT&nbsp;&nbsp;3.5</div>
        </div>
        <div className="avatar-label">
            <div className="frame">
            <div className="text-wrapper">Upgrade Plan</div>
            <div className="div">Get GPT-4 and more</div>
            </div>
        </div>
      </div>

      <div className="navbar-middle">
        <Flex gap="small" wrap>
          <Button type='text' shape="circle" size="large">
            <FaSun className="icon" />
          </Button>
          <Button type='text' shape="circle" size="large">
            <FaMoon className="icon" />
          </Button>
        </Flex>
      </div>

      <div className="navbar-right">
        <span className="timestamp">22 hours ago</span>
        <Button> <FaCog className="icon"/> </Button>
      </div>

    </nav>
  );
}

export default NavBar;
