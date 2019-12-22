import { Note } from "./models/note.model";
import { NoteLevel } from "./enums/note-level.enum";
import { User } from "./models/user.model";
import { ObjectID } from "mongodb";
import { UsersController } from "./controllers/users.controller";

const usersController = new UsersController();

let run = async () => {    
    const note = new Note("This is my first note!", "note writen in the class", NoteLevel.High);
    const user = new User(new ObjectID(), "Almog", "Laktivi", "Achisemakh", [note]);
    try {
        // TODO
    } catch (error) {
        console.error(error);
    }
};

run().then(() => console.log("Done running!"));
