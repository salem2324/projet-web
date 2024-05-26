import React from "react";


const Header = () => {
  const links = ['ART', 'SCIENCE', 'TECHNOLOGIE', 'CINEMA', 'DESIGN', 'FOOD', 'NAME', 'LOG', 'ACTION'];

  return (
    <header className="header">
      <nav>
        <ul className="nav">
          {links.map((link, index) => (
            <li key={index}>
              <a href={`#${link.toLowerCase()}`} className="nav-link">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;