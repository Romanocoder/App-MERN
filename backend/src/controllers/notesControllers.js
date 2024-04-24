const noteCtrl = {};

const Note = require("../models/Note");

noteCtrl.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

noteCtrl.createNote = async (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new Note({
    title,
    content,
    date,
    author,
  });
  await newNote.save();
  res.json({ message: "Note saved" });
};

noteCtrl.updateNote = async (req, res) => {
  const { title, content, author } = req.body;
  await Note.findByIdAndUpdate(req.params.id, {
    title,
    content,
    author,
  });
  res.json({ message: "Note update" });
};

noteCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete({ _id: req.params.id });
  res.json({ message: "Note deleted" });
};

noteCtrl.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  console.log(note);
  res.json(note);
};

module.exports = noteCtrl;
