import React, { Component } from 'react'

export default class TodoListItem extends Component {
    onElementClick = () => {
        this.props.onToggle(this.props.item.id);        
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
            <li onClick={this.onElementClick} style={this.getElementStyling(this.props.item)}>
                {this.props.item.title}
                &nbsp;
                <span onClick={this.onDeleteClick}>X</span>
            </li>
        )
    }
}

const ELEMENT_STYLING = {
    backgroundColor: 'yellow'
}