import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/UserProfile', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


export const schema = mongoose.Schema;

export const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

