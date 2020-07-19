import React from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';

function Form({ user }) {
    console.log(user);
    return <div>Form</div>;
}

const mapStateToProps = (state, props) => {
    const user =
        props.match.params.id == 'new'
            ? {
                  name: '',
                  username: '',
                  email: '',
                  phone: '',
              }
            : state.users.items.find(
                  (user) => user.id == props.match.params.id
              );
    return {
        user,
    };
};

export default withRouter(connect(mapStateToProps)(Form));
