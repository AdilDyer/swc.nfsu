"use client";
import React from "react";
import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className={`nav active ${show && "hidden"}`}>
      <div className="leftPart">
        <Link href="/">Home</Link>
        <Link href="#about">About</Link>
        <Link href="/contact">Contact</Link>
        <DropdownButton
          variant="light"
          id="dropdown-basic-button"
          title="Quick Links"
        >
          <Dropdown.Item href="#/action-1">Calendar of Events</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Study Groups</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Grievance</Dropdown.Item>
          <Dropdown.Item href="#/action-1">Qbon</Dropdown.Item>
          <Dropdown.Item href="#/action-1">Counselling</Dropdown.Item>
          <Dropdown.Item href="#/action-1">Contact Team</Dropdown.Item>
          <Dropdown.Item href="#/action-1">Socials</Dropdown.Item>
          <Dropdown.Item href="/ourteam">Our Team</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="rightPart">
        <img src="https://guwahati.nfsu.ac.in/img/logo.png" alt="" />
        <div>
          <h6>National Forensic Sciences University</h6>
          <h6>Student Welfare Committee</h6>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
