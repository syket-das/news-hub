const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const News = require('./model/news');
const app = express();

app.use(express.json());

app.use(cors());
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};
app.post('/create-news', async (req, res) => {
  const { title, content } = req.body;
  const news = await News.create({
    title,
    content,
  });

  res.send(news);
});

app.get('/news', async (req, res) => {
  const news = await News.find();
  res.send(news);
});

app.put('/news/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const news = await News.findByIdAndUpdate(id, { status }, { new: true });
  res.send(news);
});

app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});
