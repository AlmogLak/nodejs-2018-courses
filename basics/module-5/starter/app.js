"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const note_model_1 = require("./models/note.model");
const note_level_enum_1 = require("./enums/note-level.enum");
const user_model_1 = require("./models/user.model");
const mongodb_1 = require("mongodb");
const users_controller_1 = require("./controllers/users.controller");
const usersController = new users_controller_1.UsersController();
let run = () => __awaiter(this, void 0, void 0, function* () {
    const note = new note_model_1.Note("This is my first note!", "note writen in the class", note_level_enum_1.NoteLevel.High);
    const user = new user_model_1.User(new mongodb_1.ObjectID(), "Almog", "Laktivi", "Achisemakh", [note]);
    try {
        yield usersController.create(user);
        let users = yield usersController.list();
        console.log(users);
        for (const user of users) {
            yield usersController.delete(user._id);
        }
    }
    catch (error) {
        console.error(error);
    }
});
run().then(() => console.log("Done running!"));
//# sourceMappingURL=app.js.map