import React from "react";
import Wrapper from "../users-list/wrapper.styles";
import FormField from "../../molecules/form-field/form-field";
import {Button} from "../../atoms/button/button";


const Form = ({formValues, handleAddUser, handleFormValueChange}) => {
    return (
        <>
            <Wrapper as='form' onSubmit={handleAddUser}>
                <h2>Add new user</h2>
                <FormField label='Name' id='name' name='name' value={formValues.name} onChange={handleFormValueChange}></FormField>
                <FormField label='Attendance' id='attendance' name='attendance' value={formValues.attendance} onChange={handleFormValueChange}></FormField>
                <FormField label='Average' id='average' name='average' value={formValues.average} onChange={handleFormValueChange}></FormField>
                <Button type='button' onClick={handleAddUser}>Add</Button>
            </Wrapper>
        </>
    )
}

export default Form;
