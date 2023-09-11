import {
  AppBar,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
  FormControl,
  TextField,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Checkbox,
  Rating,
  Button,
} from "@mui/material";
// import Button from "UI/Button";
import { authActions } from "app/slices/auth";

import { RiShutDownLine } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import logo from "assets/logo.svg";
import avatar from "assets/avatar.webp";
import {
  Link,
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import { FlexBetween } from "UI/FlexPs";
import { useDispatch } from "react-redux";
const Navbar = ({ isAuth }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [term, setTerm] = useState("");
 
  const navigate = useNavigate();
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const dispatch = useDispatch();
  const handlerScroll = () => {
    if (window.scrollY > 100) {
      setIsPageScrolled(true);
    } else {
      setIsPageScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handlerScroll);

    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);

  return (
    <Box
      className={"duration-200 z-50"}
      width={"100%"}
      position={"fixed"}
      bgcolor={isPageScrolled ? "#151515" : "transparent"}
    >
      <Toolbar className="lg:px-20">
        <FlexBetween width={"100%"} p={"1rem"}>
          <Box className={"flex gap-8 items-center"}>
            <Link to={"/"}>
              <img className="w-32 cursor-pointer" src={logo} alt="" />
            </Link>
            {isAuth && (
              <div className="flex gap-4">
                <Link
                  to={"/explore/movie/popular"}
                  className="text-white text-xl"
                >
                  Movies
                </Link>
                <Link
                  to={"/explore/tv/airing_today"}
                  className="text-white text-xl"
                >
                  series
                </Link>
              </div>
            )}
          </Box>
          {isAuth ? (
            <Box>
              <FlexBetween gap={"1rem"}>
                <Box
                  className={"cursor-pointer"}
                  onClick={() => {
                    dispatch(authActions.logout());
                    // router("/");
                  }}
                >
                  <RiShutDownLine color={"#fff"} size={"2rem"}></RiShutDownLine>
                </Box>
              </FlexBetween>
            </Box>
          ) : (
            <Box>
              <FlexBetween gap={"1rem"}>
                <Button
                  title={"Login"}
                  type={"red"}
                  className={"bold rounded-none"}
                  reverse
                  onClick={() => {
                    dispatch(authActions.login());
                  }}
                />
              </FlexBetween>
            </Box>
          )}
        </FlexBetween>
      </Toolbar>
    </Box>
  );
};

export default Navbar;
