import { Component, OnInit } from '@angular/core';
import { NoteManagerService } from '../note-manager.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements OnInit {
  constructor(public noteManager: NoteManagerService) {}

  ngOnInit(): void {}
}
