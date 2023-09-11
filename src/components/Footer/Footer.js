import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import { Box, Typography, Link } from "@mui/material";
const footerArray = [
  ["FAQ", "Help Center", "Account", "Media Center", "Investor Relations"],
  ["Jobs", "Ways to Watch", "Terms of Use", "Privacy", "Cookie Preferences"],
  [
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix",
  ],
];

const Footer = () => {
  return (
    <Box
      sx={{
        // backgroundColor: "#141414",
        borderTop: "10px solid rgb(35,35,35)",
        color: "#757575",
        textAlign: "center",
      }}
      className={"mt-6 pb-16"}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
        className={"px-20 mx-auto pt-8"}
      >
        {footerArray.map((arr, i) => {
          return (
            <Box key={i} className={"flex flex-col items-start gap-2"}>
              {arr.map((array, index) => {
                return (
                  <Link
                    key={index}
                    href="#"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "underline",
                      mx: 1,
                      "&:active": { color: "#e50914" },
                    }}
                  >
                    {array}
                  </Link>
                );
              })}
            </Box>
          );
        })}
      </Box>

      <Typography variant="body2" sx={{ color: "#757575" }}>
        &copy; {new Date().getFullYear()} Netflix
      </Typography>
    </Box>
  );
};

export default Footer;
