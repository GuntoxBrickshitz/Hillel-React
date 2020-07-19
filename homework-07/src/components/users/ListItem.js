import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
export default function ListItem({ user }) {
    const history = useHistory();
    const { path, url } = useRouteMatch();

    function onRowClick() {
        console.log(history);
        history.push(url + '/' + user.id);
    }

    return (
        <TableRow onClick={onRowClick}>
            <TableCell component="th" scope="row">
                {user.name}
            </TableCell>
            <TableCell align="right">{user.username}</TableCell>
            <TableCell align="right">{user.email}</TableCell>
            <TableCell align="right">{user.phone}</TableCell>
        </TableRow>
    );
}
