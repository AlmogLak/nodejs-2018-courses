import { NoteLevel } from "../enums/note-level.enum";
import { ObjectID } from "mongodb";

export class Note {
    constructor(
        public _id: ObjectID,
        public note: string,
        public comment: string,
        public level: NoteLevel) { }
}
