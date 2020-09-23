"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const note_model_1 = require("./models/note.model");
const note_level_enum_1 = require("./enums/note-level.enum");
const user_model_1 = require("./models/user.model");
const mongodb_1 = require("mongodb");
const note = new note_model_1.Note("This is my first note!", "note writen in the class", note_level_enum_1.NoteLevel.High);
console.log("inserted note", note);
const user = new user_model_1.User(new mongodb_1.ObjectID(), "Almog", "Laktivi", "Achisemakh", [note]);
console.log("inserted user", user);
// Method 1 for printing multiple promise results:
Promise.all([
    user.getNotesByLevel(note_level_enum_1.NoteLevel.High),
    user.getNotesByLevel(note_level_enum_1.NoteLevel.Medium),
    user.getNotesByLevel(note_level_enum_1.NoteLevel.Low)
])
    .then(values => {
    console.log("High level notes", values[0]);
    console.log("Medium level notes", values[1]);
    console.log("Low level notes", values[2]);
});
console.log("After Promise.all");
// Method 2 for printing multiple promise results:
// (async function main() {
//     try {
//         const notes1 = await user.getNotesByLevel(NoteLevel.High);
//         console.log("After notes high", notes1);
//         const notes2 = await user.getNotesByLevel(NoteLevel.Medium);
//         console.log("After notes medium", notes2);
//         const notes3 = await user.getNotesByLevel(NoteLevel.Low);
//         console.log("After notes low", notes3);
//     } catch (err) {
//         console.error(err);
//     }
// })();
// console.log("After main");
//# sourceMappingURL=app.js.map