import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsPageHero from "./DetailsPageHero";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { getDetailsById } from "../../api/requests";
import ShowCast from "./ShowCast";
import SimilarShows from "./SimilarShows";
import YouTube from "react-youtube";
import ReactPlayer from "react-player";

const details = [
  { title: "Status", attachment: "status" },
  { title: "Original Language", attachment: "original_language" },
  { title: "Type", attachment: "original_language" },
  { title: "Budget", attachment: "budget" },
  { title: "Revenue", attachment: "revenue" },
  { title: "Networks", attachment: "production_companies" },
  { title: "Languages", attachment: "languages" },
];
const DetailsPage = () => {
  const data = useParams();

  const [movie, setMovie] = useState(null);
  console.log("🚀 ~ file: index.js:22 ~ DetailsPage ~ movie:", movie);

  const { id, type } = data;
  useEffect(() => {
    setMovie(null);
    async function fetchData() {
      const detailsData = await getDetailsById(id, type);
      setMovie(detailsData);
    }
    fetchData();
  }, [id, type]);
  if (!movie) return null;

  return (
    <>
      <DetailsPageHero movie={movie} />

      <div className=" max-w-[1440px]  mx-auto my-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="w-full col-span-3 p-4">
            <ReactPlayer
              className={"w-full h-full"}
              // url={"https://www.youtube.com/watch?v=LXb3EKWsInQ"}
              url={`https://www.youtube.com/watch?v=${movie?.videos?.results[0]?.key}`}
            />
            {/* <YouTube
              videoId={movie?.videos?.results[0]?.key}
              opts={{
                height: "540px",
                width: "640px",
              }}
            /> */}
            {/* <iframe
              width=""
              height="540"
              src={`https://www.youtube.com/embed/${movie?.videos?.results[0]?.key}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              className="w-full"
            /> */}
          </div>
          <div className="p-4">
            {details.map((detail, index) => {
              if (!movie[detail.attachment]) return null;

              let content;
              if (detail.attachment === "production_companies") {
                content = movie[detail.attachment].length ? (
                  <div className="flex flex-wrap gap-2  auto-cols-max">
                    {movie[detail.attachment].map((company) => {
                      if (!company.logo_path) return null;
                      return (
                        <img
                          className="bg-red-700 p-1 w-fit"
                          key={company.id}
                          src={`https://www.themoviedb.org/t/p/h30/${company.logo_path}`}
                          alt=""
                        />
                      );
                    })}
                  </div>
                ) : null;
              } else {
                content = (
                  <h3 className="mb-2 text-lg font-thin text-white">
                    {movie[detail.attachment].toLocaleString("en-US")}{" "}
                    {detail.attachment === "budget" ||
                    detail.attachment === "revenue"
                      ? "$"
                      : ""}
                  </h3>
                );
              }
              return (
                <div key={index} className="mb-8">
                  <h2 className="mb-2 font-semibold text-xl text-white">
                    {detail.title}
                  </h2>
                  {content}{" "}
                </div>
              );
            })}
          </div>
        </div>
        <ShowCast cast={movie.credits.cast}></ShowCast>
        {movie.similar.results.length && (
          <SimilarShows
            similarShows={movie.similar.results}
            title={movie.original_title ? "Similar Movies" : "Similar Series"}
          ></SimilarShows>
        )}
        {movie.recommendations.results.length && (
          <SimilarShows
            similarShows={movie.recommendations.results}
            title={"Recommendations"}
          ></SimilarShows>
        )}
      </div>
    </>
  );
};

export default DetailsPage;
