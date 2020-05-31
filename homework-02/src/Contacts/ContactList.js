import React, { Component } from 'react'
import ContactListItem from './ContactListItem'

export default class ContactList extends Component {
    render() {
        return (
            <table>
                <tr>
                    <td>Name</td>
                    <td>Surname</td>
                    <td>Phone</td>
                    <td>Action</td>
                </tr>

                { 
                    this.props.contacts.map(
                        (item) => (
                            <ContactListItem key={item.id} item={item} onDelete={this.props.onDelete} />
                        )
                    )
                }
            </table>
        );
    }
}
