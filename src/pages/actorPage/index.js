import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { getActorDetailsById } from "../../api/requests";
import { Swiper, SwiperSlide } from "swiper/react";
import { PhotoView } from "react-photo-view";
import { Box } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "assets/logo.svg";

function calculateAge(birthDate, deathDate = false) {
  const birth = new Date(birthDate);
  const end = deathDate ? new Date(deathDate) : new Date();

  const ageInMilliseconds = end - birth;
  const ageDate = new Date(ageInMilliseconds);
  const years = ageDate.getUTCFullYear() - 1970;

  return years;
}
function LifeRange(birthDate, deathDate) {
  const birth = new Date(birthDate).getFullYear();
  const end = new Date(deathDate).getFullYear();

  return ` (${birth} - ${end})`;
}

const ActorDetails = () => {
  const data = useParams();
  const [actor, setActor] = useState(null);
  const navigate = useNavigate();

  const { id } = data;
  useEffect(() => {
    async function fetchData() {
      const detailsData = await getActorDetailsById(id);
      setActor(detailsData);
    }
    fetchData();
  }, [id]);
  if (!actor) return null;
  return (
    <div className=" relative overflow-hidden">
      <div className="lg:flex gap-16 pt-28 pb-14 px-4 lg:px-24 z-10 relative ">
        <div className="h-full  ">
          <img
            src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
            alt="movie-poster"
            className="h-full  rounded-xl"
          />
        </div>
        <div className="py-4  lg:w-3/4 flex flex-col justify-between">
          <div>
            <h2 className="text-white text-2xl lg:text-6xl mb-6">
              {actor.name}
              {actor.deathday && actor.birthday && (
                <span className="text-2xl opacity-75">
                  {LifeRange(actor.birthday, actor.deathday)}
                </span>
              )}
            </h2>
            <div className="mb-6">
              <p className="text-csec mb-3"> Biography </p>
              <p className="text-csec"> {actor.biography} </p>
            </div>

            <div className="flex justify-between mb-12">
              <div className="">
                <h2 className="text-white font-bold">Known For</h2>
                <h3 className="text-white font-light opacity-75">
                  {actor.known_for_department}
                </h3>
              </div>

              <div className="">
                <h2 className="text-white font-bold">Known Credits</h2>
                <h3 className="text-white font-light opacity-75">
                  {actor.combined_credits.cast.length}
                </h3>
              </div>

              <div className="">
                <h2 className="text-white font-bold">Gender</h2>
                <h3 className="text-white font-light opacity-75">
                  {actor.gender === 2 ? "Male" : "Female"}
                </h3>
              </div>

              <div className="">
                <h2 className="text-white font-bold">Birthday</h2>
                <h3 className="text-white font-light opacity-75">
                  {actor.birthday ? (
                    <>
                      {" "}
                      {actor.birthday}{" "}
                      <span>
                        {" "}
                        ({calculateAge(actor.birthday, actor.deathday)})
                      </span>
                    </>
                  ) : (
                    "Unknown"
                  )}
                </h3>
              </div>

              <div className="">
                <h2 className="text-white font-bold">Place Of Birth</h2>
                <h3 className="text-white font-light opacity-75">
                  {actor.place_of_birth ? actor.place_of_birth : "Unknown"}
                </h3>
              </div>
            </div>
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
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
              }}
              loop={false}
              className="mySwiper"
            >
              {actor.combined_credits.cast.map((data) => {
                if (!data.poster_path) return null;
                return (
                  <SwiperSlide
                    key={data.id}
                    className="cursor-pointer translate-x-1/"
                    onClick={() => {
                      navigate(
                        `/details/${data.original_name ? "tv" : "movie"}/${
                          data.id
                        }`
                      );
                    }}
                  >
                    {({ isActive, isPrev }) => (
                      <Box className={"duration-200 relative"}>
                        <LazyLoadImage
                          className="w-full"
                          src={`https://image.tmdb.org/t/p/original${data.poster_path}`} // use normal <img> attributes as props
                        />

                        <LazyLoadImage
                          src={logo}
                          className={"absolute top-4 left-4 w-12 z-10"}
                          alt=""
                        />
                        <div className="my-2 flex gap-2 justify-between ">
                          <h3 className="text-white font-light opacity-75">
                            {data.original_title}
                          </h3>
                          <div className="   text-white">
                            {data.vote_average?.toFixed(1)}
                          </div>
                        </div>
                        <h3 className="text-white font-light opacity-75">
                          {data.release_date}
                        </h3>
                      </Box>
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
};

export default ActorDetails;
