import React from 'react';
import { connect } from 'react';

class login extends React.Component {
    state= {
        creds: {
            username: '',
            password: ''
        }
    };


handleChange = e => {
    this.ListeningStateChangedEvent({
        creds: {
            ...this.state.creds,
            [e.target.name]: e.target.value
        }
    })
};

login = e => {
    e.preventDefault();
    this.props.login(this.state.creds)
}

render() {
    return (
        <div>
            <form onSubmit = {this.login}>
                <input type="text"
                name= "username"
                value={this.state.creds.username}
                onChange={this.handleChange} /> 

                <input type= "password"
                name= "password"
                value={this.state.creds.password}
                onChange={this.handleChange} />
            </form>
        </div>
    )
};



}


export default login;