import React from "react";
import * as Icons from "@/svgIcons";

const SvgIcon = ({
  name,
  size = 16,
  color = "currentColor",
  className = "",
}) => {
  const Icon = Icons[name];

  return Icon ? <Icon size={size} color={color} className={className} /> : null;
};

export default SvgIcon;
