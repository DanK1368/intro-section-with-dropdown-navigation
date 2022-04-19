import { useState } from "react";
import Button from "./shared/Button";
import {
  StyledHeader,
  StyledNav,
  StyledNavBar,
  StyledSignUp,
  StyledBurger,
  StyledDropdown,
} from "./styles/Header.styled";

export default function Header() {
  // on small screens, display nav on burger icon

  const [icon, setIcon] = useState(true);

  const handleNav = () => {
    const nav = document.querySelector(".navbar-container");
    nav.classList.toggle("active");
    nav.classList.contains("active") ? setIcon(false) : setIcon(true);
  };

  // display dropdown menu for feature/company icon
  const handleDropdown = e => {
    const features = document.querySelector(".features");
    const company = document.querySelector(".company");
    const iconFeatures = document.querySelector(".icon-features");
    const iconCompany = document.querySelector(".icon-company");

    if (e.target.classList.contains("link-features")) {
      features.classList.toggle("dropdown-active");
      iconFeatures.classList.toggle("icon-rotate");
    } else if (e.target.classList.contains("link-company")) {
      company.classList.toggle("dropdown-active");
      iconCompany.classList.toggle("icon-rotate");
    }
  };

  return (
    <StyledHeader>
      <img src="./images/logo.svg" alt="snap company logo" />
      <StyledNav>
        <StyledNavBar className="navbar-container">
          <ul className="navbar">
            <li>
              <a
                className="link-features"
                href="#"
                onClick={e => handleDropdown(e)}
              >
                Features
                <img
                  className="icon-features"
                  src="./images/icon-arrow-down.svg"
                  alt=""
                />
              </a>
              <StyledDropdown className="dropdown features">
                <ul className="dropdown-menu">
                  <li>
                    <img src="./images/icon-todo.svg" alt="" />
                    Todo List
                  </li>
                  <li>
                    <img src="./images/icon-calendar.svg" alt="" />
                    Calendar
                  </li>
                  <li>
                    <img src="./images/icon-reminders.svg" alt="" />
                    Reminders
                  </li>
                  <li>
                    <img src="./images/icon-planning.svg" alt="" />
                    Planning
                  </li>
                </ul>
              </StyledDropdown>
            </li>
            <li>
              <a
                className="link-company"
                href="#"
                onClick={e => handleDropdown(e)}
              >
                Company
                <img
                  className="icon-company"
                  src="./images/icon-arrow-down.svg"
                  alt=""
                />
              </a>
              <StyledDropdown className="dropdown company">
                <ul className="dropdown-menu">
                  <li>History</li>
                  <li>Our Team</li>
                  <li>Blog</li>
                </ul>
              </StyledDropdown>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </StyledNavBar>
        <StyledSignUp>
          <a href="#">Login</a>
          <Button text="Register" btnType="register-btn" />
        </StyledSignUp>
        <StyledBurger onClick={() => handleNav()}>
          <img
            className="icon-burger"
            src={
              icon ? "./images/icon-menu.svg" : "./images/icon-close-menu.svg"
            }
            alt="icon to display the navigation bar"
          />
        </StyledBurger>
      </StyledNav>
    </StyledHeader>
  );
}
