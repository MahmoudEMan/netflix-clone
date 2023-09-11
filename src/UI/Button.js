import React from "react";
import { Box, Typography, Button as MuiButton } from "@mui/material";
import styles from "./Button.module.css";
const Button = ({
  title,
  icon = false,
  type,
  className,
  onClick,
  style,
  reverse = false,
}) => {
  return (
    <Box
      className={`${styles[type]} ${
        styles.button
      } flex items-center cursor-pointer ${reverse ? "flex-row-reverse" : ""}
      ${className}`}
      style={style}
      display={"flex"}
      gap={"1.5rem"}
      onClick={onClick}
    >
      {icon && <Box>{icon}</Box>}
      <Typography varient={"h3"}>{title}</Typography>
    </Box>
  );
};

export default Button;
