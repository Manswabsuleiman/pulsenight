import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <NavLink to="/" onClick={handleLinkClick}>Movie | Pulse</NavLink>
      </div>

      {/* Hamburger Menu Icon */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links + Sign In inside the slider */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li><NavLink to="/" onClick={handleLinkClick}>Home</NavLink></li>
        <li><NavLink to="/genres" onClick={handleLinkClick}>Genres</NavLink></li>
        <li><NavLink to="/movies" onClick={handleLinkClick}>Movies</NavLink></li>
        <li><NavLink to="/anime" onClick={handleLinkClick}>Anime</NavLink></li>
        <li><NavLink to="/subscription" onClick={handleLinkClick}>Subscription</NavLink></li>

        {/* Sign In button visible only in the slider */}
        <li className="auth-item">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="signin-btn" onClick={handleLinkClick}>Sign In</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </li>
      </ul>

      {/* Remove auth-container from desktop if you don't want a separate button */}
    </nav>
  );
};

export default Navbar;
