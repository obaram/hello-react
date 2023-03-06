import UsersList from "components/organisms/users-list/users-list";
import styled, {ThemeProvider} from 'styled-components';
import {GlobalStyle} from "../styles/global-style";
import {theme} from "../styles/theme";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import Form from "../components/organisms/form/form";
import {users} from "../data/data";
import {useEffect, useState} from "react";

const Wrapper = styled.div`
  background-color: #f7f8fa;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const initialFormState = {
    name: '',
    attendance: '',
    average: ''
}

const mockAPI = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (users) {
            resolve([...users])
        } else {
            reject({message: 'error'})
        }
    }, 2000)
})

const Root = () => {
    const [users, setUsers] = useState([]);
    const [formValues, setFormValues] = useState(initialFormState);


    const deleteUser = (user) => {
        const filteredUsers = users.filter((u) => u.name !== user.name);
        setUsers(filteredUsers);
    };

    const handleFormValueChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleAddUser = (e) => {
        e.preventDefault();
        const newUser = {
            name: formValues.name,
            attendance: formValues.attendance,
            average: formValues.average
        }
        setUsers([newUser, ...users]);
        setFormValues(initialFormState);
    }

    useEffect(() => {
        mockAPI().then((data) => {
            setUsers(data);
        })
    }, [])


    return (
        <>
            <Router>
                <ThemeProvider theme={theme}>
                    <GlobalStyle/>
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='/add-user'>Add user</Link>
                    </nav>
                    <Wrapper>
                        <Routes>
                            <Route path='/' exact element={<UsersList deleteUser={deleteUser} users={users}/>}/>
                            <Route path='add-user' exact  element={<Form formValues={formValues} handleAddUser={handleAddUser} handleFormValueChange={handleFormValueChange}/>}/>
                        </Routes>
                    </Wrapper>
                </ThemeProvider>
            </Router>
        </>
    );
}

export default Root;
