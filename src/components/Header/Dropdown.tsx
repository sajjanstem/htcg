import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);
  const serviceDropdown = [
    {
      id: 1,
      title: "STEM Genius Hunt",
      path: "./stem",
      cName: "submenu-item",
    },
    {
      id: 2,
      title: "Maths Genius Hunt",
      path: "./maths",
      cName: "submenu-item",
    },
    {
      id: 3,
      title: "Science Genius Hunt",
      path: "./science",
      cName: "submenu-item",
    }
  ]

  return (
    <>
      <ul
        className={dropdown ? "ss-exams-submenu clicked" : "ss-exams-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown.map((item: any) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;