import { Box } from "@mui/material";
import { getShowsByCategory } from "api/requests";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "assets/logo.svg";
import Pagination from "components/Pagination/Pagination";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
const categories = [
  [
    { title: "Popular", route: "popular" },
    { title: "Now Playing", route: "now_playing" },
    { title: "Top Rated", route: "top_rated" },
    { title: "Upcoming", route: "upcoming" },
  ],
  [
    { title: "Airing Today", route: "airing_today" },
    { title: "On The Air", route: "on_the_air" },
    { title: "Popular", route: "popular" },
    { title: "Top Rated", route: "top_rated" },
  ],
];

const MoviesPage = () => {
  const navigate = useNavigate();
  const { type, category } = useParams();
  const [shows, setShows] = useState(null);
  const [page, setPage] = useState(1);
  console.log("🚀 ~ file: index.js:14 ~ MoviesPage ~ shows:", shows);

  useEffect(() => {
    setShows(null);
    async function fetchData() {
      const detailsData = await getShowsByCategory(category, type, page);
      setShows(detailsData);
    }
    fetchData();
  }, [category, type, page]);

  if (!shows) return null;
  return (
    <div className="pt-40 pb-8 px-8 lg:px-20 ">
      <div className="grid lg:flex grid-cols-2">
        {categories[type === "movie" ? 0 : 1].map((cate, index) => {
          return (
            <Link
              to={`/explore/${type}/${cate.route}`}
              key={index}
              className={` px-6 py-2 border-2 text-white  ${
                cate.route === category
                  ? "bg-red-700 border-red-700"
                  : " border-white"
              }`}
            >
              {cate.title}
            </Link>
          );
        })}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-16 mt-12">
        {shows.results.map((show, index) => {
          return (
            <Box
              onClick={() => {
                navigate(
                  `/details/${show.original_name ? "tv" : "movie"}/${show.id}`
                );
              }}
              className={"cursor-pointer relative"}
              key={index}
            >
              <LazyLoadImage
                className="w-full"
                src={`https://image.tmdb.org/t/p/original${show.poster_path}`} // use normal <img> attributes as props
              />
              <LazyLoadImage
                src={logo}
                className={"absolute top-4 left-4 w-12 z-10"}
                alt=""
              />
              <div
                className="absolute z-30 bottom-0 left-4 translate-y-1/2"
                style={{ width: 60, height: 60 }}
              >
                <CircularProgressbar
                  value={+show.vote_average.toFixed(1)}
                  minValue={0}
                  maxValue={10}
                  text={+show.vote_average.toFixed(1)}
                  background
                  backgroundPadding={2}
                  strokeWidth={2}
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "red",
                    backgroundColor: "#000",
                    textSize: "2rem",
                  })}
                  // text={`${percentage}%`}
                />
              </div>
            </Box>
          );
        })}
      </div>
      <div className="mt-24  ">
        <Pagination
          page={page}
          totalPages={shows.total_pages}
          setPage={(e) => {
            setPage(e);
          }}
        ></Pagination>
      </div>
    </div>
  );
};

export default MoviesPage;
