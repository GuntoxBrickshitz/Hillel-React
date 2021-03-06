import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default class Todo extends React.Component {
    state = {
        todos: [
            {   id: 1, title: 'do smt', isDone: false },
            {   id: 2, title: 'do smt 2', isDone: true },
            {   id: 3, title: 'do smt 3', isDone: false }            
        ]
    }

    addNewTodo = (newTodo) => {
        newTodo.id = Date.now();
        newTodo.isDone = false;       

        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    deleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(item => item.id !== id)
        })
    }

    toggleTodo = (id) => {
        this.setState({
            todos: this.state.todos.map(item => 
                item.id !== id ? item : { ...item, isDone: !item.isDone }
            )
        });
    }

    render() {        
        return (
            <>
              <TodoList todos={this.state.todos} onDelete={this.deleteTodo} onToggle={this.toggleTodo} /> 
              <TodoForm onSubmit={this.addNewTodo} />
            </>
        );
    }
}