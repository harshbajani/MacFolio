import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { navIcons, navLinks } from "@constants";
import useWindowStore from "@store/window";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved theme preference or use system preference
    if (typeof window !== 'undefined') {
      if (localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        return true;
      } else {
        document.documentElement.classList.remove('dark');
        return false;
      }
    }
    return false;
  });

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  // Handle system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!('theme' in localStorage)) {
        setDarkMode(e.matches);
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Harsh's Portfolio</p>

        <ul>
          {navLinks.map((item) => (
            <li key={item.id} onClick={() => openWindow(item.type)}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map((icon) => (
            <li
              key={icon.id}
              className={icon.id === 4 ? "cursor-pointer" : ""}
              onClick={icon.id === 4 ? toggleDarkMode : undefined}
            >
              <img
                src={icon.img}
                className="icon-hover w-5 h-5"
                alt={icon.id === 4 ? "Toggle theme" : `icon-${icon.id}`}
                title={icon.id === 4 ? (darkMode ? "Switch to light mode" : "Switch to dark mode") : ""}
              />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
