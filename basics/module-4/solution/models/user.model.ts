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

    public async getNotesByLevel(level: NoteLevel) {
        try {
            await this.delay(2000);
        } catch (error) {
            console.error(error);
        }
        
        return this.notes.filter(note => note.level === level);
    }

    private delay(milliseconds: number): Promise<void> {
        return new Promise<void>(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }
}
