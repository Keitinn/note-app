import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NoteManagerService } from '../note-manager.service';
@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss'],
})
export class NoteEditComponent implements OnInit {
  constructor(public noteManager: NoteManagerService, private router: Router) {}

  ngOnInit() {}
  markdown = ``;

  saveNote(title: string, content: string) {
    this.noteManager.addNote(title, content);
    this.router.navigate(['']);
  }
}
