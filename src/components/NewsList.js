// src/components/NewsList.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../actions/newsActions";
import NewsItem from "./NewsItem";
import Advertisement from "./Advertisement";

const NewsList = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.news);
  const ads = useSelector((state) => state.news.ads);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const renderContent = () => {
    const content = [];
    const newsPerAd = 3;
    let adIndex = 0;

    for (let i = 0; i < news.length; i += newsPerAd) {
      // Push news items
      content.push(
        news
          .slice(i, i + newsPerAd)
          .map((item, index) => (
            <NewsItem key={`news-${i + index}`} {...item} />
          ))
      );

      // Push an advertisement
      if (ads.length > 0) {
        content.push(
          <Advertisement
            key={`ad-${adIndex}`}
            image={ads[adIndex % ads.length].image}
          />
        );
        adIndex += 1;
      }
    }

    return content;
  };

  return <div>{renderContent()}</div>;
};

export default NewsList;
