import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import './App.css';
import Navigation from './components/common/Navigation';
import Users from './components/users/Users';
import Albums from './components/albums/Albums';

function App() {
    return (
        <Router>
            <Container maxWidth="lg">
                <Navigation />
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Switch>
                            <Route path="/" exact>
                                <Users />
                            </Route>
                            <Route path="/users">
                                <Users />
                            </Route>
                            <Route path="/albums">
                                <Albums />
                            </Route>
                            <Route path="*">
                                <Redirect to="/" />
                            </Route>
                        </Switch>
                    </Grid>
                </Grid>
            </Container>
        </Router>
    );
}

export default App;
