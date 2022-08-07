import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = ({ news, unverified }) => {
  const { title, content } = news;

  const fakeHandler = () => {
    axios
      .put(`/news/${news._id}`, {
        status: 'fake',
      })
      .then((response) => {
        alert('News marked as fake');
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert('Error');
      });
  };

  const realHandler = () => {
    axios
      .put(`/news/${news._id}`, {
        status: 'real',
      })
      .then((response) => {
        alert('News marked as real');
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert('Error');
      });
  };
  return (
    <div className="mb-4">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
          {unverified && (
            <div className="d-flex justify-content-between ">
              <Button variant="danger" onClick={fakeHandler}>
                Fake
              </Button>
              <Button variant="primary" onClick={realHandler}>
                Real
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
