const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const questionRoutes = require('./routes/questionRoute');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.use('/api/questions', questionRoutes);

const PORT=process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server up on port:: ${PORT}`);
});
