const mongoose = require('mongoose');
const mongoUri = 'mongodb://ec2-3-21-170-25.us-east-2.compute.amazonaws.com/images';

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() {
  console.log('connected to db!');
});


module.exports = db;