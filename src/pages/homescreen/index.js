import React from "react";
import HomeBanner from "components/HomeBanner/HomeBanner";
import { Box } from "@mui/material";
import { requests } from "api/requests";
import HomeSlider from "components/HomeSlider/HomeSlider";
const HomeScreen = () => {
  return (
    <Box>
      <HomeBanner></HomeBanner>
      <Box>
        {requests.map(({ title, url }, idx) => {
          return <HomeSlider key={idx} title={title} url={url}></HomeSlider>;
        })}
      </Box>
    </Box>
  );
};

export default HomeScreen;
