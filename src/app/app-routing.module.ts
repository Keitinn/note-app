import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteListComponent } from './note-list/note-list.component';

const routes: Routes = [
  {
    path: '',
    component: NoteListComponent,
  },
  {
    path: 'add',
    component: NoteEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
