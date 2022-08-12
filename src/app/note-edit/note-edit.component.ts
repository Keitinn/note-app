import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NoteManagerService } from '../note-manager.service';
@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss'],
})
export class NoteEditComponent implements OnInit {
  constructor(
    public noteManager: NoteManagerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  editNoteName: string | undefined = undefined;
  markdown: string | undefined = undefined;

  ngOnInit(): void {
    this.editNoteName = this.route.snapshot.paramMap
      .get('editNoteName')
      ?.toString();
    if (this.editNoteName) {
      this.markdown = this.noteManager.getContent(this.editNoteName);
    } else {
      this.markdown = ``;
    }
  }

  saveNote(title: string, content: string) {
    if (this.noteManager.findSameTitle(title)) {
      this.noteManager.updateNoteContent(title, content);
      this.router.navigate(['']);
    } else {
      this.noteManager.addNote(title, content);
      this.router.navigate(['']);
    }
  }
}
