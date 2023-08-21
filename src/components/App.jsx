import React, { Component } from 'react';
/* import { Counter } from './counter/Counter';
import { Dropdown } from './dropdown/Dropdown';
import { Colorpicker } from './colorPicker/ColorPicker'; */
import { TodoList } from './toDoList/TodoList';
import initialTodos from '../todo.json';

/* const colorPickerOptions = [
  { label: 'red', color: 'red' },
  { label: 'green', color: 'green' },
  { label: 'blue', color: 'blue' },
  { label: 'grey', color: 'grey' },
  { label: 'pink', color: 'pink' },
  { label: 'idigo', color: 'indigo' },
]; */

export class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        {/* <Counter initialValue={10} />
        <Dropdown />
        <Colorpicker options={colorPickerOptions} /> */}
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}
