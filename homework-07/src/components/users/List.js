import React from 'react';
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Button,
} from '@material-ui/core';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { useHistory, useRouteMatch, Link } from 'react-router-dom';

function List({ users }) {
    const history = useHistory();
    const { path, url } = useRouteMatch();

    function onAddButtonClick() {
        history.push(url + '/new');
    }
    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Username</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <ListItem user={user} key={user.id} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Link to={url + '/new'}>New</Link>
        </>
    );
}

const mapStateToProps = ({ users: { items } }) => ({
    users: items,
});

export default connect(mapStateToProps)(List);
