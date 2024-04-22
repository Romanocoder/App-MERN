const noteCtrl = {};

const Note = require("../models/Note")

noteCtrl.getNotes = async (req, res)=> {
    const notes = await Note.find();
    res.json(notes)
};

noteCtrl.createNote = (req, res)=> {
    const {title, content, date, author} = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author
    })
    console.log(newNote)
    res.json({message: "Note saved"})
};

noteCtrl.updateNote = (req, res)=> res.json({message: "Note update"});

noteCtrl.deleteNote = (req, res)=> res.json({message: "Note deleted"});

noteCtrl.getNote = (req, res)=> res.json({title: "First note"});
module.exports = noteCtrl;
