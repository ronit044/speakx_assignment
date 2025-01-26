const Question = require('../models/questionModel');

exports.searchByTitle = async (req, res) => {
 const { title, page = 1, limit = 10 } = req.query;
 try {
  let searchQuery = {};

  if (title) {
   searchQuery.title = new RegExp(title, 'i');
  }

  const questions = await Question.find(searchQuery)
   .skip((page - 1) * limit)
   .limit(limit);

  res.json({ questions });
 } catch (err) {
  console.error('Error searching by title:', err.message);
  res.status(500).json({ message: 'Error searching by title' });
 }
};

exports.getById = async (req, res) => {
 const { id } = req.params;

 try {
  const question = await Question.findById(id);

  if (!question) {
   return res.status(404).json({ message: 'Question not found' });
  }

  res.json(question);
 } catch (err) {
  console.error('Error fetching question by ID:', err.message);
  res.status(500).json({ message: 'Error fetching question by ID' });
 }
};
