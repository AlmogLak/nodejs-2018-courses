import { Note } from "./models/note.model";
import { NoteLevel } from "./enums/note-level.enum";
import { User } from "./models/user.model";
import { ObjectID } from "mongodb";

const note = new Note("This is my first note!", "note writen in the class", NoteLevel.High);
console.log("inserted note", note);

const user = new User(new ObjectID(), "Almog", "Laktivi", "Achisemakh", [note]);
console.log("inserted user", user);

console.log("High level notes", user.getNotesByLevel(NoteLevel.High));
console.log("Medium level notes", user.getNotesByLevel(NoteLevel.Medium));
console.log("Low level notes", user.getNotesByLevel(NoteLevel.Low));
