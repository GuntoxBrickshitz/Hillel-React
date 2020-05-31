import React, { Component } from 'react';

export default class ContactForm extends Component {
    state = {
        taskTitle: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault();
    
        this.props.onSubmit({
            title: this.state.taskTitle
        });

        this.setState({
            taskTitle: ''
        })
    }

    onInputChange = (event) => {        
        this.setState({
            taskTitle: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>                
                <button>Add contact</button>
            </form>
        )
    }
}

/*
<input
                    type="text"
                    name="taskTitle"
                    value={this.state.taskTitle}
                    onChange={this.onInputChange}
                />
*/

