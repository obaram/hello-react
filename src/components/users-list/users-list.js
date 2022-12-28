import React from "react";
import {users} from "data/data";
import UsersListItem from "../users-list-item/users-list-item";
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    max-width: 500px;
    background-color: ${(props) => props.theme.colors.primary};
    padding: 40px 30px;
    border-radius: 25px;
    box-shadow: 0 5px 15px -10px rgba(0,0,0,0.3);
`

const StyledList = styled.ul`
    list-style: none;
    margin:0;
    padding:0;
`




const UsersList = () => (
    <Wrapper>
        <StyledList>
            {users.map((user) => (
                <UsersListItem user={user}></UsersListItem>
            ))
            }
        </StyledList>
    </Wrapper>
)

export default UsersList;
