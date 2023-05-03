const mongoose = require('mongoose');

// connect to mongo db
const mongoUri = process.env.MONGODB_URI || 'The-Officeial-api'
mongoose.set('useUnifiedTopology', true)
mongoose.set('useFindAndModify', false)
mongoose.connect(mongoUri, { useNewUrlParser: true })

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`)
})

module.exports = mongoose.connection

// // Requirements
// require('dotenv').config();
// const mongoose = require('mongoose');
// const MONGODB_URI = process.env.MONGODB_URI;

// // Connect to MongoDB
// const mongoUri = 'mongodb://localhost/office';

// mongoose.connect(mongoUri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(error => console.error('Error connecting to MongoDB: ', error));

// module.exports = mongoose.connection;