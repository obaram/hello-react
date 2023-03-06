import React from "react";
import Wrapper from "../components/organisms/users-list/wrapper.styles";
import FormField from "../components/molecules/form-field/form-field";
import {Button} from "../components/atoms/button/button";

const AddUser = ({formValues, handleAddUser, handleFormValueChange}) => {
    return (
        <>
            <Wrapper as='form' onSubmit={handleAddUser}>
                <h2>Add new user</h2>
                <FormField label='Name' id='name' name='name' value={formValues.name} onChange={handleFormValueChange}/>
                <FormField label='Attendance' id='attendance' name='attendance' value={formValues.attendance} onChange={handleFormValueChange}/>
                <FormField label='Average' id='average' name='average' value={formValues.average} onChange={handleFormValueChange}/>
                <Button type='button' onClick={handleAddUser}>Add</Button>
            </Wrapper>
        </>
    )
}

export default AddUser;
