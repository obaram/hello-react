import React from "react";
import {users} from "data/data";
import UsersListItem from "../users-list-item/users-list-item";
import Wrapper from "./wrapper.styles";
import StyledList from "./styled-list.styles";

class UsersList extends React.Component {

    state = {
        users,
        isUsersList: true
    }

    toggleListTitle = () =>  { this.setState((prevState) => ({isUsersList: !prevState.isUsersList}))};

    deleteUser = (user) => {
        const filteredUsers = this.state.users.filter((u) => u.name !== user.name);
        this.setState({users: filteredUsers});
    };

    render() {
        return (
            <Wrapper>
                <h1>{this.state.isUsersList ? 'Users list ': 'Students list'}</h1>
                <button onClick={this.toggleListTitle}>Change title</button>
                <StyledList>
                    {this.state.users.map((user, i) => (
                        <UsersListItem index={i} user={user} deleteUser={this.deleteUser}/>
                    ))
                    }
                </StyledList>
            </Wrapper>
        )
    }

    componentDidMount() {
        console.log('mount');
    }
}

export default UsersList;
