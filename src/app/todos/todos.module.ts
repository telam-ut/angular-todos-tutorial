import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodosService } from './todos.service';



@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TodoListComponent
  ],
  providers: [
    TodosService,
  ]
})
export class TodosModule { }
