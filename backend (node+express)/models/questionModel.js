const mongoose = require('mongoose');
const { Schema } = mongoose;

const OptionSchema = new Schema({
  text: { type: String, required: true },
  isCorrectAnswer: { type: Boolean, required: true }
});

const BlockSchema = new Schema({
  text: { type: String, required: true },
  showInOption: { type: Boolean, default: true },
  isAnswer: { type: Boolean, required: true }
});

const QuestionSchema = new Schema({
  type: {
    type: String,
    enum: ['ANAGRAM', 'MCQ'],
    required: true
  },
  title: { type: String, required: true },
  siblingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },

  anagramType: {
    type: String,
    enum: ['WORD', 'SENTENCE'],
    required: function() { return this.type === 'ANAGRAM'; }
  },
  blocks: [BlockSchema],
  solution: {
    type: String,
    required: function() { return this.type === 'ANAGRAM'; }
  },

  options: [OptionSchema],
});

const Question = mongoose.model('Question', QuestionSchema,"Questions");
module.exports = Question;
