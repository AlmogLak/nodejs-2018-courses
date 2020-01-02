import { NoteLevel } from "../enums/note-level.enum";
import { ObjectID } from "mongodb";
export declare class Note {
    _id: ObjectID;
    note: string;
    comment: string;
    level: NoteLevel;
    constructor(_id: ObjectID, note: string, comment: string, level: NoteLevel);
}
