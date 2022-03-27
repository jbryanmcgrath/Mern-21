const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb+srv://jbryanmcgrath:MongoDB123@cluster0.wkwck.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;