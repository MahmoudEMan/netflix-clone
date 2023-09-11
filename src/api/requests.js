import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

export const requests = [
  {
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    title: "Trending Movies",
  },
  {
    url: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    title: "Originals",
  },
  {
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    title: "Top Rated Movies",
  },
  {
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    title: "Action Movies",
  },
  {
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    title: "Comedy Movies",
  },
  {
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    title: "Horror Movies",
  },
  {
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    title: "Romance Movies",
  },
  {
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    title: "Documentaries",
  },
];

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
  },
});

export const getDetailsById = async (id, type) => {
  const url = `/${type}/${id}`;
  const res = await instance.get(url, {
    params: {
      append_to_response:
        "videos,images,credits,reviews,keywords,release_dates,external_ids,similar,recommendations",
    },
  });

  return res.data;
};

export const getActorDetailsById = async (id, type) => {
  const url = `/person/${id}`;
  const res = await instance.get(url, {
    params: {
      append_to_response: "changes,images,latest,combined_credits",
    },
  });

  return res.data;
};

export const searchTMDB = async (query, page = 1) => {
  const url = `/search/multi`;
  const res = await instance.get(url, {
    params: {
      query,
      page,
      append_to_response:
        "videos,images,credits,reviews,keywords,release_dates,external_ids,similar,recommendations",
    },
  });

  return res.data;
};
export const getShowsByCategory = async (category, type, page) => {
  const url = `/${type}/${category}`;
  const res = await instance.get(url, {
    params: {
      page,
    },
  });

  return res.data;
};
