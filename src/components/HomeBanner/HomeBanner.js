import React, { useEffect, useState } from "react";
import axios from "axios";

import { Box, Typography } from "@mui/material";
import Button from "UI/Button";
import { GrPlayFill } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const HomeBanner = () => {
  const navigate = useNavigate();
  const [bannerData, setBannerData] = useState({});
  // const API_KEY = "57f94a46cae5199f1d9fa34fef2959f8";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((res) => {
        const randomNum = Math.floor(Math.random() * res.data.results.length);

        setBannerData(res.data.results[randomNum]);
      });
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(180deg,#00000018,#000), url("https://image.tmdb.org/t/p/original${bannerData.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
      position={"relative"}
      className={"flex items-center px-4 py-28  lg:p-20 lg:h-screen "}
    >
      <Box>
        <Typography
          className="text-4xl lg:text-7xl"
          fontWeight={"500"}
          color={"#fff"}
          marginBottom={"1.25rem"}
          varient={"h1"}
          textTransform={"uppercase"}
        >
          {bannerData.original_name || bannerData.original_title}
        </Typography>
        <Typography
          fontSize={"1rem"}
          fontWeight={"400"}
          color={"#fff"}
          marginBottom={"1.25rem"}
          className={"w-auto lg:w-3/5"}
          variant="body1"
        >
          {bannerData?.overview?.substr(0, 110)}
          {bannerData?.overview?.length > 110 ? " ..." : ""}
        </Typography>
        <Box className={"flex gap-4"}>
          <Button
            title={"Play"}
            icon={<GrPlayFill color="#fff"></GrPlayFill>}
            type={"white"}
          ></Button>
          <Button
            onClick={() => {
              navigate(`/details/${bannerData.media_type}/${bannerData.id}`);
            }}
            title={"More info"}
            type={"grey"}
          ></Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeBanner;
