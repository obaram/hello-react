import styled, {ThemeProvider} from 'styled-components';
import {GlobalStyle} from "../styles/global-style";
import {theme} from "../styles/theme";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AddUser from "./add-user";
import Dashboard from "./dashboard";
import {MainLayout} from "../components/organisms/main-layout/main-layout";
import React from "react";
import {UsersProvider} from "../providers/users-provider";


const Wrapper = styled.div`
  background-color: #f7f8fa;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Root = () => {
    return (
        <>
            <Router>
                <ThemeProvider theme={theme}>
                    <GlobalStyle/>
                    <MainLayout>
                        <UsersProvider>
                        <Wrapper>
                            <Routes>
                                <Route path='/' exact element={<Dashboard/>}/>
                                <Route path='add-user' exact
                                       element={<AddUser/>}/>
                            </Routes>
                        </Wrapper>
                        </UsersProvider>
                    </MainLayout>
                </ThemeProvider>
            </Router>
        </>
    );
}

export default Root;
