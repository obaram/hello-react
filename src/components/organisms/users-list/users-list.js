import React, {useContext} from "react";
import UsersListItem from "../../molecules/users-list-item/users-list-item";
import Wrapper from "./wrapper.styles";
import StyledList from "./styled-list.styles";
import {UsersContext} from "../../../providers/users-provider";

const UsersList = () => {
    const {users, deleteUser} = useContext(UsersContext);
    return (
        <>
            <Wrapper>
                <StyledList>
                    {users.map((user, i) => (
                        <UsersListItem index={i} user={user} key={i} deleteUser={deleteUser}/>
                    ))
                    }
                </StyledList>
            </Wrapper>
        </>
    )
}

export default UsersList;
