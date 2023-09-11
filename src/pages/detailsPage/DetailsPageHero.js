import { Box } from "@mui/material";
import React from "react";

// import WorkScore from "./WorkScore";
// import { Link, useParams } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import { PhotoView } from "react-photo-view";
export default function MoviePageHero({ movie }) {
  return (
    <div className=" relative overflow-hidden">
      <div className="absolute h-full w-full left-0 top-0 -z-10 blur-sm">
        <img
          className="movie-backdrop-img object-cover w-full  h-full "
          src={`https://www.themoviedb.org/t/p/w1920_and_h1080_multi_faces${movie.backdrop_path}`}
          alt="backdrop-img "
        />
      </div>
      <div className="fluid-overlay "></div>
      <div className="lg:flex gap-16 pt-28 pb-14 px-4 lg:px-24 z-10 relative ">
        <div className="h-full  ">
          <img
            src={
              movie.poster_path
                ? `https://www.themoviedb.org/t/p/w400/${movie.poster_path}`
                : `https://via.placeholder.com/440X660/FF2530/fff.png?text=NOT_AVAILABLE`
            }
            alt="movie-poster"
            className="h-full  rounded-xl max-md:w-full"
          />
        </div>
        <div className="py-4  lg:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-white text-2xl lg:text-6xl mb-6">
              {movie.original_title || movie.original_name}
            </h2>

            <div className="lg:flex gap-6 items-center mb-6 ">
              <div className="flex gap-6 max-sm:mt-6 items-center">
                <h2 className="text-csec">
                  {" "}
                  {movie.release_date || movie.first_air_date}{" "}
                </h2>
                <h2 className="text-csec">
                  {" "}
                  {movie.original_title
                    ? movie.runtime + " Mins"
                    : movie.episode_run_time[0]
                    ? movie.episode_run_time[0] + " Mins"
                    : "44 Mins"}{" "}
                </h2>

                {movie.original_name && (
                  <h2 className="text-csec">
                    {movie.seasons.length +
                      `${movie.seasons.length === 1 ? " season" : " seasons"}`}
                  </h2>
                )}
              </div>

              <div className="flex gap-6 max-sm:mt-6 items-center">
                <div className="w-10 h-10 bg-black rounded-full border-solid border-red-700 border-2 flex justify-center items-center text-red-700">
                  {movie.adult ? "+21" : "+18"}
                </div>
                <div className="flex gap-4">
                  {movie.genres.slice(0, 3).map((genre, index) => {
                    return (
                      <h2 key={index} className="text-csec">
                        {" "}
                        {genre.name}{" "}
                      </h2>
                    );
                  })}
                </div>
                <div className="text-csec">
                  <span className="font-bold text-xl">
                    {+movie.vote_average.toFixed(1)}
                  </span>
                  /10
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-csec mb-3"> {movie.tagline} </p>
            <p className="text-csec"> {movie.overview} </p>
          </div>

          <Box className={"mt-8"}>
            <Swiper
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              loop
              className="mySwiper"
            >
              {movie.images.backdrops.slice(0, 10).map((data) => {
                return (
                  <SwiperSlide
                    key={data.id}
                    className="cursor-pointer translate-x-1/"
                  >
                    {({ isActive, isPrev }) => (
                      <PhotoView
                        photoClosable
                        src={`https://image.tmdb.org/t/p/original${data.file_path}`}
                      >
                        <img
                          className={"rounded-lg"}
                          src={`https://image.tmdb.org/t/p/original${data.file_path}`}
                          alt=""
                        />
                      </PhotoView>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </div>
      </div>
    </div>
  );
}
