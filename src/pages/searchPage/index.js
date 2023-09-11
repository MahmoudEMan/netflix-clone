import React, { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { searchTMDB } from "../../api/requests";

const SearchPage = () => {
  const location = useLocation();
  const [params] = useSearchParams();
  const [query, setQuery] = useState("");
  const [term, setTerm] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    // scrollToTop();
    setQuery(params.get("q"));
    setPage(+params.get("page") || 1);
  }, [location]);

  useEffect(() => {
    if (query)
      (async () => {
        const detailsData = await searchTMDB(query, page);
        console.log("🚀 ~ file: index.js:21 ~ detailsData:", detailsData);
        document.title = `NETFLIX | Search ${query}`;
      })();
  }, [page, query]);

  console.log("🚀 ~ file: index.js:6 ~ SearchPage ~ data:", params.get("q"));
  return <div>index</div>;
};

export default SearchPage;
