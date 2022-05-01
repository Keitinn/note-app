import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root',
})
export class NoteManagerService {
  private notes: Note[];
  constructor() {
    this.notes = [];
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
}
