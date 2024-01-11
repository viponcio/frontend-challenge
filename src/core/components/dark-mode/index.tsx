import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import React from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
    
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
      <div className="flex-none ml-2">
        <button className="btn-ghost">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "light" ? false : true}
              className="opacity-0"            />
            <MoonIcon className=" text-gray-100 h-6 swap-on"/>
            <SunIcon className="h-6 swap-off"/>
          </label>
        </button>
      </div>
  );
};
export default DarkMode