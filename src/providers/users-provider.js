import React, {useEffect, useState} from "react";
import {users} from "../data/data";

const mockAPI = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (users) {
            resolve([...users])
        } else {
            reject({message: 'error'})
        }
    }, 2000)
})

export const UsersContext = React.createContext({
    users: [],
    handleAddUser: () => {},
    deleteUser: () => {}
})

export const UsersProvider = ({children}) => {
    const [users, setUsers] = useState([]);

    const deleteUser = (user) => {
        const filteredUsers = users.filter((u) => u.name !== user.name);
        setUsers(filteredUsers);
    };

    const handleAddUser = (e, user) => {
        e.preventDefault();
        const newUser = {
            name: user.name,
            attendance: user.attendance,
            average: user.average
        }
        setUsers([newUser, ...users]);
    }

    useEffect(() => {
        mockAPI().then((data) => {
            setUsers(data);
        })
    }, [])

    return (
        <UsersContext.Provider value={{users, handleAddUser, deleteUser}}>
            {children}
        </UsersContext.Provider>
    )
}

