import { Component, OnInit } from '@angular/core';
import { TodoTypes } from '../types/todo-types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app-root.component.html',
  styleUrl: './app-root.component.css',
})
export class AppRootComponent implements OnInit {
  name: string;
  newTodo: string = '';
  todos: TodoTypes[];

  constructor() {
    this.name = 'Angular dev';
    this.todos = [];
  }

  ngOnInit(): void {
    this.todos = [
      { id: 1, label: 'Learn Angular', completed: false },
      { id: 2, label: 'Set up Angular', completed: false },
      { id: 3, label: 'Create Todo', completed: false },
    ];
  }

  createTodo(todoLabel: string): void {
    const newTodo = <TodoTypes>{
      id: this.todos.length + 1,
      label: todoLabel,
      completed: false,
    };

    this.todos.push(newTodo);
  }

  updateTodo(todo: TodoTypes): void {
    const updatedTodos = this.todos.map((todoInArray) => {
      if (todoInArray.id === todo.id) {
        return { ...todoInArray, label: todo.label, completed: todo.completed };
      }

      return todoInArray;
    });

    this.todos = updatedTodos;
  }

  deleteTodo(todo: TodoTypes): void {
    const filteredTodos = this.todos.filter(
      (todoInArray) => todoInArray.id !== todo.id
    );

    this.todos = filteredTodos;
    console.log('todos', this.todos);
  }
}
