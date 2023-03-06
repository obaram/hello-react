import React, {useEffect, useState} from "react";
import {users} from "data/data";
import UsersListItem from "../users-list-item/users-list-item";
import Wrapper from "./wrapper.styles";
import StyledList from "./styled-list.styles";

const mockAPI = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (users) {
            resolve([...users])
        } else {
            reject({message: 'error'})
        }
    }, 2000)
})

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isUsersList, setUsersList] = useState(false);

    const toggleListTitle = () => {
        setUsersList(false)
    };

    const deleteUser = (user) => {
        const filteredUsers = users.filter((u) => u.name !== user.name);
        setUsers(filteredUsers);
    };

    useEffect(() => {
        mockAPI().then((data) => {
            setUsers(data);
        })
    }, [])

    return (
        <Wrapper>
            <h1>{isUsersList ? 'Users list ' : 'Students list'}</h1>
            <button onClick={toggleListTitle}>Change title</button>
            <StyledList>
                {users.map((user, i) => (
                    <UsersListItem index={i} user={user} deleteUser={deleteUser}/>
                ))
                }
            </StyledList>
        </Wrapper>
    )
}

export default UsersList;
