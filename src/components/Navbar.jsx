/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setShowNav(false);
      }
    };
    window.addEventListener("resize", handleResize);

    console.log("showNav", showNav);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log("showNav", showNav);

  return (
    <header className="header">
      <NavLink
        to={"/"}
        className="w-10 h-10 flex justify-center items-center shadow-md rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-[#00c6ff] w-6 h-6 filter hue-rotate-15 saturate-150"
        >
          <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
          <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>
      </NavLink>
      <nav className="flex items-start justify-center sm:items-center overflow-hidden">
        <div
          className={`md:flex md:translate-x-0 text-lg gap-7 font-medium cursor-pointer ${
            showNav ? "nav-links-open" : "nav-links"
          }`}
        >
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/projects"}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            Contact
          </NavLink>
        </div>

        <div className="md:hidden cursor-pointer ml-6 z-20">
          <div
            className={`${showNav ? "hidden" : ""}`}
            onClick={() => setShowNav(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div
            className={`${showNav ? "" : "hidden"}`}
            onClick={() => setShowNav(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
};
