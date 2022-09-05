import React, { Component } from 'react';
import './Users.css';
import './UsersList';
import UsersList from './UsersList';
import Counter from './Counter';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            liczUser: 0
        };
    }

    addUser = (event) => {
        event.preventDefault();

        let newUser = {
            id: Date.now(),
            name: this._inputName.value
        }

        this.setState((state) => {
            return ({
                users: state.users.concat(newUser),
                liczUser: state.liczUser +1
            })
        })
        this._inputName.value = '';
    }

    removeUser = (userID) => {
        this.setState((state) => {
            return ({
                users: state.users.filter(user =>
                    user.id !== userID),
                liczUser: state.liczUser -1
            });
        })
    }

    render() {
        return (

            <div className="users-main">
                <h1> Lista użytkowników</h1>
                <form onSubmit={this.addUser}>
                    <input ref={(element) => { this._inputName = element }} type="text" minLength={3}
                        placeholder="Wpisz imię" />
                    <button type="submit">Dodaj</button>
                </form>
                <Counter liczUser={this.state.liczUser} />
                <UsersList usersList={this.state.users} removeUserMethod={this.removeUser} />
            </div>
        );
    }
}
export default Users;
