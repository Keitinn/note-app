import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root',
})
export class NoteManagerService {
  private notes: Note[];
  constructor() {
    this.notes = [];
    this.loadNotes();
  }

  saveNotes() {
    let jsonString = JSON.stringify(this.notes);
    window.localStorage.setItem('notes', jsonString);
  }

  loadNotes() {
    let jsonString = window.localStorage.getItem('notes');
    if (jsonString) {
      this.notes = JSON.parse(jsonString);
    }
  }

  addNote(title: string, content: string) {
    this.notes.push({
      title: title,
      content: content,
    });
    this.saveNotes();
  }

  getNotes() {
    return this.notes;
  }

  // 同じタイトルのノートがあるかどうかを返す
  findSameTitle(title: string) {
    let retVal = this.notes.find((note) => note.title == title);
    return retVal ? true : false;
  }

  // 同じタイトルのノートを更新する
  updateNoteContent(title: string, content: string) {
    let note = this.notes.find((note) => (note.title = title));
    if (note) {
      note.content = content;
    }
    this.saveNotes();
  }

  getContent(title: string) {
    let retVal = this.notes.find((note) => note.title == title)?.content;
    return retVal;
  }
}
