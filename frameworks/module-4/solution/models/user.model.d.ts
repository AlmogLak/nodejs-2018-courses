import { Note } from "./note.model";
import { ObjectID } from "mongodb";
import { NoteLevel } from "../enums/note-level.enum";
export declare class User {
    _id: ObjectID;
    firstName: string;
    lastName: string;
    address: string;
    notes: Array<Note>;
    constructor(_id: ObjectID, firstName: string, lastName: string, address: string, notes: Array<Note>);
    getNotesByLevel(level: NoteLevel): Promise<Note[]>;
    private delay;
}
