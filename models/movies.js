import mongoose from 'mongoose';
const { Schema } = mongoose;

// For security, connectionString should be in a separate file and excluded from git
const connectionString = "mongodb+srv://Hijiri1993629:Hijiri1993629@cluster0.fpyns.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(connectionString, {
    dbName: 'SCC_Project',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// define data model as JSON key/value pairs
// values indicate the data type of each key
const movieSchema = new Schema({
 name: { type: String, required: true },
 year: Number,
 type: String,
 genre: String
});

export const Movie = mongoose.model('movie', movieSchema);
