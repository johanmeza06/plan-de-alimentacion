import React from "react";

// Importar todos los iconos SVG como componentes React
import BreakfastIcon from "../assets/icons/breakfast-icon.svg?react";
import DinnerIcon from "../assets/icons/dinner-icon.svg?react";
import DownloadIcon from "../assets/icons/downloadIcon.svg?react";
import LunchIcon from "../assets/icons/lunch-icon.svg?react";
import PrintIcon from "../assets/icons/printIcon.svg?react";
import ReloadIcon from "../assets/icons/reloadIcon.svg?react";
import SnackIcon from "../assets/icons/snack-icon.svg?react";
import TrashIcon from "../assets/icons/trashIcon.svg?react";
import DarkModeIcon from "../assets/icons/dark-mode-icon.svg?react";
import LightModeIcon from "../assets/icons/light-mode-icon.svg?react";
import BackIcon from "../assets/icons/back-icon.svg?react";
import DownIcon from "../assets/icons/down-icon.svg?react";
import CheckDoneIcon from "../assets/icons/check-done-icon.svg?react";
import CheckDoneNoIcon from "../assets/icons/check-done-no-icon.svg?react";
import ArrowDone from "../assets/icons/arrow-done-icon.svg?react";

// Mapeo de nombres de iconos a componentes SVG
const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  breakfast: BreakfastIcon,
  dinner: DinnerIcon,
  download: DownloadIcon,
  lunch: LunchIcon,
  print: PrintIcon,
  reload: ReloadIcon,
  snack: SnackIcon,
  trash: TrashIcon,
  dark: DarkModeIcon,
  light: LightModeIcon,
  back: BackIcon,
  down: DownIcon,
  checkDone: CheckDoneIcon,
  checkDoneNo: CheckDoneNoIcon,
  arrowDone: ArrowDone,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, className = "", size = 24 }) => {
  const IconComponent = iconMap[name];

  return <IconComponent className={className} width={size} height={size} />;
};

export default Icon;
