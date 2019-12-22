import { Note } from "./note.model";
import { ObjectID } from "mongodb";
import { NoteLevel } from "../enums/note-level.enum";

export class User {
    constructor(
        public _id: ObjectID,
        public firstName: string,
        public lastName: string,
        public address: string,
        public notes: Array<Note>
    ) { }

    public getNotesByLevel(level: NoteLevel) {
        return this.notes.filter(note => note.level === level);
    }

    private delay(milliseconds: number): Promise<void> {
        return new Promise<void>(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }
}
