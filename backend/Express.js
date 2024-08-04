const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/u-learntech', { useNewUrlParser: true, useUnifiedTopology: true });

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: Array,
  price: Number
});

const Course = mongoose.model('Course', CourseSchema);

app.use(express.json());

app.get('/api/courses', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

app.get('/api/courses/:id', async (req, res) => {
  const course = await Course.findById(req.params.id);
  res.json(course);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
