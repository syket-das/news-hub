import axios from 'axios';
import React, { useEffect, useState } from 'react';
import News from '../components/News';

const RealNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get('/news')
      .then(function (response) {
        console.log(response);
        setNews(response.data.filter((news) => news.status === 'real'));
      })
      .catch(function (error) {
        console.log(error);
        alert('Error');
      });
  }, []);

  return (
    <div>
      <div className="">
        {news.map((p) => (
          <News key={p._id} news={p} real={true} />
        ))}
      </div>
    </div>
  );
};

export default RealNews;
