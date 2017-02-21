import React,{Component} from 'react';
import {Link} from 'react-router';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: []
        };
    }
    render(){
        return <div>
            This is the header
            <Link to="/">HOme</Link>
            Total User Count is {this.state.users.length}
        </div>
    }
}

export default Header;
