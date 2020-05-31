import React, { Component } from 'react'

export default class TodoListItem extends Component {
    onElementClick = () => {
        // this.props.onToggle(this.props.item.id);        
    }

    onDeleteClick = (event) => {
        event.stopPropagation();        
        this.props.onDelete(this.props.item.id);
    }

    getElementStyling(item) {
        const styling = { ...ELEMENT_STYLING };

        if (item.isDone) {
            styling.backgroundColor = 'green';
        }

        return styling;
    }

    render() {
        return (
            <tr onClick={this.onElementClick} style={this.getElementStyling(this.props.item)}>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.surname}</td>
                <td>{this.props.item.phone}</td>
                <td><span onClick={this.onDeleteClick}>Delete</span></td>
            </tr>
        )
    }
}

const ELEMENT_STYLING = {
    backgroundColor: 'lightgrey'
}