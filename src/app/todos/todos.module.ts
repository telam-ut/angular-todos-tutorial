import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodosService } from './todos.service';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';



@NgModule({
  declarations: [TodoListComponent, TodoListItemComponent, EditTodoComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    TodoListComponent
  ],
  providers: [
    TodosService,
  ]
})
export class TodosModule { }
