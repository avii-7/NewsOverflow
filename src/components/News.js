import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const captitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  };

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(null);
  const [page, setPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    setLoading(true);
    props.setProgress(25);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=` + (page + 1);
    const response = await fetch(url);
    const result = await response.json();
    setArticles(articles.concat(result.articles));
    setTotalResults(result.totalResults);
    props.setProgress(100);
    setLoading(false);
    setPage(page + 1);
  };

  useEffect(() => {
    document.title = `${captitalize(props.category) + " - NewsOverflow"}`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  let counter = 0;

  return (
    <div className="container">
      <h1 className="text-center text-primary" style={{ marginTop: "70px" }}>
        NewsOverflow - <small>Top {captitalize(props.category)} Headlines</small>
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll dataLength={articles.length} next={updateNews} hasMore={articles.length !== totalResults} loader={<Spinner />}>
        <div className="row">
          {articles &&
            articles.map((item) => {
              return (
                <div className="col-md-4 my-3" key={counter++}>
                  <NewsItem
                    title={item && item.title ? item.title.slice(0, 45) : ""}
                    description={item && item.description ? item.description.slice(0, 128) : ""}
                    imageUrl={item && item.urlToImage ? item.urlToImage : ""}
                    url={item && item.url ? item.url : ""}
                    published={item ? new Date(item.publishedAt).toUTCString() : ""}
                  />
                </div>
              );
            })}
        </div>
      </InfiniteScroll>
    </div>
  );
}

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};
News.defaultProps = {
  country: "in",
  category: "entertainment",
};
