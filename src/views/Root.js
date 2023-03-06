import styled, {ThemeProvider} from 'styled-components';
import {GlobalStyle} from "../styles/global-style";
import {theme} from "../styles/theme";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {users} from "../data/data";
import {useEffect, useState} from "react";
import AddUser from "./add-user";
import Dashboard from "./dashboard";
import {MainLayout} from "../components/organisms/main-layout/main-layout";

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
                    <MainLayout>
                        <Wrapper>
                            <Routes>
                                <Route path='/' exact element={<Dashboard deleteUser={deleteUser} users={users}/>}/>
                                <Route path='add-user' exact
                                       element={<AddUser formValues={formValues} handleAddUser={handleAddUser}
                                                      handleFormValueChange={handleFormValueChange}/>}/>
                            </Routes>
                        </Wrapper>
                    </MainLayout>
                </ThemeProvider>
            </Router>
        </>
    );
}

export default Root;
