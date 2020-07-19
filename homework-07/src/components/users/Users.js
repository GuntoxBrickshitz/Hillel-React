import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import List from './List';
import { getUsers } from '../../store/actions/users';
import { useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Form from './Form';
function Contacts({ getUsers }) {
    useEffect(() => {
        getUsers();
    }, [getUsers]);

    const { path, url } = useRouteMatch();

    console.log(path, url);
    return (
        <Paper>
            <Switch>
                <Route path={path + '/'} exact>
                    <List />
                </Route>
                <Route path={path + '/:id'}>
                    <Form />
                </Route>
            </Switch>
        </Paper>
    );
}

const mapDispatchToprops = {
    getUsers,
};

export default connect(null, mapDispatchToprops)(Contacts);
