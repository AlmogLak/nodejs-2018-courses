"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const note_model_1 = require("./models/note.model");
const note_level_enum_1 = require("./enums/note-level.enum");
const user_model_1 = require("./models/user.model");
const mongodb_1 = require("mongodb");
const note = new note_model_1.Note("This is my first note!", "note writen in the class", note_level_enum_1.NoteLevel.High);
console.log("inserted note", note);
const user = new user_model_1.User(new mongodb_1.ObjectID(), "Almog", "Laktivi", "Achisemakh", [note]);
console.log("inserted user", user);
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
(function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const notes1 = yield user.getNotesByLevel(note_level_enum_1.NoteLevel.High);
            console.log("After notes high", notes1);
            const notes2 = yield user.getNotesByLevel(note_level_enum_1.NoteLevel.Medium);
            console.log("After notes medium", notes2);
            const notes3 = yield user.getNotesByLevel(note_level_enum_1.NoteLevel.Low);
            console.log("After notes low", notes3);
        }
        catch (err) {
            console.error(err);
        }
    });
})();
console.log("After main");
//# sourceMappingURL=app.js.map