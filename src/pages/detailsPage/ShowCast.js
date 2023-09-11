import { Box } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import { CircularProgressbar } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";
const ShowCast = ({ cast }) => {
  console.log("🚀 ~ file: ShowCast.js:9 ~ ShowCast ~ cast:", cast);
  const navigate = useNavigate();
  return (
    <div className={`my-16 p-4`}>
      <Box
        sx={{
          "&  .swiper-scrollbar-drag": {
            background: "#ff2530",
            cursor: "pointer",
          },
        }}
        className={"mt-8"}
      >
        <h2 className="mb-10 text-4xl text-white">Top billed cast</h2>
        <Swiper
          modules={[Scrollbar]}
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
              slidesPerView: 7,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 10,
            },
          }}
          loop={false}
          scrollbar={{
            draggable: true,
          }}
          className="mySwiper"
        >
          {cast.slice(0, 15).map((data) => {
            if (!data.profile_path) return null;
            return (
              <SwiperSlide
                onClick={() => {
                  navigate(`/actor/${data.id}`);
                }}
                key={data.id}
                className="cursor-pointer tran"
              >
                {({ isActive, isPrev }) => (
                  <div className="">
                    <LazyLoadImage
                      photoClosable
                      src={`https://image.tmdb.org/t/p/w185${data.profile_path}`}
                      className="rounded-xl mb-4"
                    />
                    <div className="mb-12">
                      <h2 className="text-white font-bold">
                        {data.original_name}
                      </h2>
                      <h3 className="text-white font-light opacity-75">
                        {data.character}
                      </h3>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </div>
  );
};

export default ShowCast;
