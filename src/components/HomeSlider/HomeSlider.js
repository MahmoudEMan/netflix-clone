import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "assets/logo.svg";
import { useNavigate } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HomeSlider = ({ title, url }) => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(`https://api.themoviedb.org/3${url}`);
      setMovies(req.data.results);
    }
    fetchData();
  }, [url]);

  return (
    <Box>
      <Typography
        textTransform={"upperCase"}
        variant={"h2"}
        color={"#fff"}
        className={"text-2xl lg:text-5xl whitespace-nowrap my-8 mx-32"}
      >
        {title}
      </Typography>
      {movies && (
        <Box>
          <Swiper
            breakpoints={{
              300: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 7,
                spaceBetween: 10,
              },
            }}
            loop
            className="mySwiper"
          >
            {movies.map((data) => {
              return (
                <SwiperSlide
                  key={data.id}
                  onClick={() => {
                    navigate(
                      `/details/${data.original_name ? "tv" : "movie"}/${
                        data.id
                      }`
                    );
                  }}
                  className="cursor-pointer translate-x-1/2"
                >
                  {({ isActive, isPrev }) => (
                    <Box
                      sx={{ opacity: isPrev ? "0.25" : "1" }}
                      className={"duration-200 relative"}
                    >
                      <LazyLoadImage
                        className="w-full"
                        src={`https://image.tmdb.org/t/p/original${data.poster_path}`} // use normal <img> attributes as props
                      />
                      <LazyLoadImage
                        src={logo}
                        className={"absolute top-4 left-4 w-12 z-10"}
                        alt=""
                      />
                    </Box>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      )}
    </Box>
  );
};

export default HomeSlider;
