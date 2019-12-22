import { NoteLevel } from "../enums/note-level.enum";

export class Note {
    constructor(
        public note: string,
        public comment: string,
        public level: NoteLevel) { }
}
