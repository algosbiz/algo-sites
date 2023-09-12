import React from "react";
import Navbar, { Nav } from "../../nav/Navbar";
import MenuContent from "./MenuContent";
import Logo from "../../logo/Logo";
import { firstColMenu, secondColMenu, thirdColMenu } from "./EremiaMenuContent";

const EremiaMenu = ({ hamburger }) => {
  let $key = 0;
  const getSubMenu = (items) => {
    $key++;
    if (items.dropdownMenu) {
      return (
        <Nav.Dropdown name={items.name} key={$key}>
          {items.dropdownMenu.map((item) => getSubMenu(item))}
        </Nav.Dropdown>
      );
    }
    return (
      <Nav.Link href={items.href} key={$key}>
        {items.name}
      </Nav.Link>
    );
  };

  return (
    <Navbar hamburger={hamburger}>
      <Navbar.Brand href={"/"} transitionPage={{ title: "Eremia" }}>
        <Logo width="75px" height="auto" />
      </Navbar.Brand>

      <Navbar.Collapse cover="Menu">
        <div className="flex flex-col w-full container px-2 md:px-24 py-32 md:py-10 space-x-4">
          <div className="flex flex-col md:flex-row w-full space-x-0 space-y-4 md:space-y-0 md:space-x-14">
            <div className="menu-col first-col w-full md:w-1/3">
              <div className="title col-title text-stroke gradient-text">
                Find More <br/>About Us
              </div>
              <Nav className="open">{firstColMenu.map((item) => getSubMenu(item))}</Nav>
            </div>
            <div className="menu-divider-vertical"></div>
            <div className="menu-col second-col w-full md:w-1/3">
              <div className="title col-title text-strok gradient-text">
                Our Digital <br/>Services
              </div>
              <Nav className="open">
                {secondColMenu.map((item) => getSubMenu(item))}
              </Nav>
            </div>
            <div className="menu-divider-vertical"></div>
            <div className="menu-col second-col w-full md:w-1/3 pb-10">
              <div className="title col-title gradient-text">
                Our useful <br/>Tips & Trick
              </div>
              <Nav className="open">
                {thirdColMenu.map((item) => getSubMenu(item))}
              </Nav>
            </div>
          </div>
          <div className="bottom">
          <div className="menu-divider-horizontal"></div>
          <MenuContent className="py-12" />
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

EremiaMenu.defaultProps = {
  hamburger: false,
};

export default EremiaMenu;
