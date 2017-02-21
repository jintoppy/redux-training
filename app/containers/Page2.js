import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state){
    return {
        users: state.users
    };
}

class Page2 extends Component{
    constructor(props){
        super(props);
    }
    getUserByLogin(loginName){
        let result = this.props.users.filter((u) => {
                return u.login === loginName;
            });
            return result.length === 0 ? null: result[0];
    }
    render(){
        let user = this.getUserByLogin(this.props.params.userName);
        let content;
        if(user){
            content = <div>
                    <h2>{user.url}</h2>
                    <h2>{user.repos_url}</h2>
            </div>
            
        }
        else{
            content = <span>No User </span>
        }
        return <div>
                    This is Page2 for {this.props.params.userName}
                    {content}
                </div>
    }
}

export default connect(mapStateToProps)(Page2);