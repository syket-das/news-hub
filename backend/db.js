const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://syket:1234@cluster0.4ttg0.mongodb.net/fakeNews?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('MongoDB connected...');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
