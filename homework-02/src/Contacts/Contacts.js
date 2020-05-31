import React, { Component } from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

export default class Contacts extends Component {
    state = {
        contacts: [
            {   id: 1, name: 'John', surname: 'Doe', phone: '380501112225' },
            {   id: 2, name: 'Jane', surname: 'Smith', phone: '380501112225' },
        ]
    }

    addnewContact = (newContact) => {
        newContact.id = Date.now();        

        this.setState({
            contacts: [...this.state.contacts, newContact]
        })
    }

    deleteContact = (id) => {
        this.setState({
            contacts: this.state.contacts.filter(item => item.id !== id)
        })
    }

    render() {        
        return (
            <>               
                <ContactList contacts={this.state.contacts} onDelete={this.deleteContact} />
                <ContactForm onSubmit={this.addnewContact} />        
            </>
        );
    }
}

/*
<TodoList contacts={this.state.contacts} onDelete={this.deleteTodo} onToggle={this.toggleTodo} /> 
              <TodoForm onSubmit={this.addnewContact} />
*/