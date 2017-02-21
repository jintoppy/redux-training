import React, {Component} from 'react';
import Content from '../components/Content';
import {connect} from 'react-redux';
import {userFetched, addUser} from '../actions/UserActions';

function mapStateToProps(state){ 
    return {
        users: state.users
    };

}

function mapDispatchToProps(dispatch){
    return {
        userFetched: function(users){
            dispatch(userFetched(users))
        },
        addUser: function(user){
            dispatch(addUser(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);