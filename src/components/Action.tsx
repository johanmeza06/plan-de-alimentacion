import React from "react";
import Icon from "./Icon";

interface ActionProps {
  icon: string;
  label: string;
  onClick: () => void;
}

const Action: React.FC<ActionProps> = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center gap-2 py-1 text-center group transition-all duration-200 ease-out  active:scale-95"
  >
    <div className="rounded-full bg-card-light shadow-md p-3 flex items-center justify-center transition-all duration-200 ease-out ">
      <Icon
        name={icon}
        className="text-secondary-light transition-colors duration-200 "
        size={24}
      />
    </div>
    <p className="text-xs font-bold text-secondary-light transition-colors duration-200 ">
      {label}
    </p>
  </button>
);

export default Action;
