import React, { useEffect, useState } from 'react';
import News from '../components/News';
import axios from 'axios';

const NewsPages = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get('/news')
      .then(function (response) {
        console.log(response);
        setNews(response.data.filter((news) => news.status === 'unverified'));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {news.map((p) => (
        <News key={p._id} news={p} unverified={true} />
      ))}
    </div>
  );
};

export default NewsPages;
