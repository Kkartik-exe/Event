import React, { useState, useEffect, useRef } from "react";
import HomePage from "../Main-page/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import hamLogo from "./ham.svg";
import logoClose from "./ham-c.svg";
import mainlogo from "./LOGO.png";
import styled from "styled-components";
import "./styles.scss";

const Wrapper = styled.div`
  display: block;
  width: 40%;
  margin-top: 20px;
  @media (max-width: 712px) {
    margin: 0;
    display: ${props => (props.toggle ? "none" : "static")};
    height: 160vh;
    width: 100vw;
    position: fixed;
    top: ${props => (props.toggle ? "-1000px" : "0px")};
    transition: top 2s;
    .nav-content {
      height: 50%;
      background-color: #121930;
    }
  }
`;

const NAVBAR = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const [toggle, setToggle] = useState(true);
  const [color, setColor] = useState("#121930");

  const navigation = useRef();

  // const listenScrollEvent = e => {
  //   if (window.scrollY > 800) {
  //     setColor("rgba(57, 174, 247)");
  //   } else {
  //     setColor("#121930");
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", listenScrollEvent);
  //   console.log(navigation);
  // }, []);

  const handleOutsideCick = (event, ref) => {
    if (!ref.current.contains(event.target)) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", e =>
      handleOutsideCick(e, navigation)
    );

    return () => {
      document.removeEventListener("mousedown", e =>
        handleOutsideCick(e, navigation)
      );
    };
  }, []);

  return (
    <Router>
      <nav className="nav_bar" style={{ backgroundColor: color }}>
      <li className="headerlogo_container1">
                <div className="logi_none">
                  <img alt="img"className="header--logo1" src={mainlogo} />
                </div>
              </li>
        <Wrapper toggle={toggle} className="nav-wrapper">

          <div className="nav-content" ref={navigation}>
            <ul className="ulnav">
              <li className="headerlogo_container">
                <div className="header_logo">
                  <img alt="img" className="percentlogomain"  src={mainlogo} />
                </div>
              </li>
              <div className="padd">
                
              </div>
              <li className="liw list--general">
                <Link to={`#about`}>
                  <span className="links">About </span>{" "}
                </Link>
              </li>
              <li className="liw list--general">
                <Link to={`#themes`}>
                  <span className="links">Tech-Storm </span>{" "}
                </Link>
              </li>
              <li className="liw list--general">
                <Link to={`#sponsors`}>
                  <span className="links">Non-Tech </span>{" "}
                </Link>
              </li>
              <li className="liw list--general">
                <Link to={`#prizes`}>
                  <span className="links">Prizes </span>{" "}
                </Link>
              </li>
              
              <li className="liw list--general">
                <Link to={`#teams`}>
                  <span className="links">Team </span>{" "}
                </Link>
              </li>
             <li className="liw list--general">
                <Link to={`#faqs`}>
                  <span className="links">FAQ </span>{" "}
                </Link>
              </li>
              <img
                alt="img"
                className="s-close"
                onClick={() => setToggle(true)}
                src={logoClose}
              />
            </ul>
          </div>
          <div className="ease" />
        </Wrapper>
        <img
          alt="img"
          className="s-open"
          onClick={() => setToggle(false)}
          src={hamLogo}
        />
      </nav>

      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

// function Projects() {
//   return <h2>Projects here</h2>;
// }

// function Contact() {
//   return <h2>contact info</h2>;
// }

// function Links() {
//   return <h2>Home</h2>;
// }

export default NAVBAR;
