const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const formSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  class: String,
  stream: String,
  goals: String,
  password: String, // ✅ optional at first
});

// ✅ Hash password before saving
formSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model('Form', formSchema);
