const mongoose = require("mongoose");
const notesSchema = {
    title:String,
    content:String
}

const Note = mongoose.model('notes',notesSchema);
module.exports = Note;