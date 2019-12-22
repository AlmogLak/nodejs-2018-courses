import { NoteLevel } from "../enums/note-level.enum";
export declare class Note {
    note: string;
    comment: string;
    level: NoteLevel;
    constructor(note: string, comment: string, level: NoteLevel);
}
