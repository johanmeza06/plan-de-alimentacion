import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import Icon from "./Icon";

const DarkModeToggle: React.FC = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-card shadow-2xl border-border transition-all duration-200 hover:scale-105 active:scale-95"
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {isDark ? (
        <Icon name="light" className=" text-yellow-400" size={24} />
      ) : (
        <Icon name="dark" className=" text-primary" size={24} />
      )}
    </button>
  );
};

export default DarkModeToggle;
