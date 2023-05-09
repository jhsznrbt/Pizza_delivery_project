const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB database with Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/pizza-delivery', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a Mongoose model for `pizzas` collection
const pizzaSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

// Example API endpoint to query pizza data
app.get('/api/pizzas', async (req, res) => {
  const pizzas = await Pizza.find();
  res.json(pizzas);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post('/login', async (req, res) => {
  try {
    const user = req.body;
    // You can continue processing the login data, such as querying from the database
    res.status(200).json({ message: 'Bejelentkezés sikeres!' });
  } catch (error) {
    res.status(400).json({ error: 'Bejelentkezés hiba!' });
  }
});

// User schema and model
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error occurred during registration.' });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Search for a user with the given username
    const user = await User.findOne({ username });

    // If no user is found, or the password doesn't match, send an error
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Hibás felhasználónév vagy jelszó!' });
    }

    // If the username and password match, the login is successful
    res.status(200).json({ message: 'Sikeres bejelentkezés!' });
  } catch (error) {
    res.status(500).json({ message: 'A bejelentkezés során hiba történt.' });
  }
});


// const DB_URI = 'mongodb://localhost:27017/pizza-delivery';
// mongoose.connect(DB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the MongoDB database.');
});
