import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const CreateNews = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, content);

    try {
      axios
        .post('/create-news', {
          title,
          content,
        })
        .then(function (response) {
          console.log(response);
          alert('News created successfully');
          window.location.reload();
          setTitle('');
          setContent('');
        })
        .catch(function (error) {
          console.log(error);
          alert('Error creating news');
        });
    } catch (error) {
      console.log(error);
      alert('Error creating news');
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Form>
        <h1 className="mb-4">Create News</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter News Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Create News
        </Button>
      </Form>
    </div>
  );
};

export default CreateNews;
