const mongoose = require('mongoose');

//const URI = 'mongodb://localhost:27017/mebAdvDigital';
const URI = 'mongodb+srv://mebRoot:T5r4e3w2q1@cluster0.e5kn5.mongodb.net/AdvDigital?retryWrites=true&w=majority';

const env = process.env.NODE_ENV || 'dev';
let options = {};

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(URI, options)
  .then(() => console.log('DB is Up!'))
  .catch((err) => console.log('DB is Down!', err));
