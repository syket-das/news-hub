const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['fake', 'real', 'unverified'],
    default: 'unverified',

  },
});

const News = mongoose.model('News', newsSchema);

module.exports = News;
