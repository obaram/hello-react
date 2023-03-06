import React, {useContext} from "react";
import Wrapper from "../components/organisms/users-list/wrapper.styles";
import FormField from "../components/molecules/form-field/form-field";
import {Button} from "../components/atoms/button/button";
import {useState} from 'react';
import {UsersContext} from "../providers/users-provider";

const initialFormState = {
    name: '',
    attendance: '',
    average: ''
}

const AddUser = () => {
    const [formValues, setFormValues] = useState(initialFormState);
    const  {handleAddUser} =  useContext(UsersContext);

    const handleFormValueChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <Wrapper as='form' onSubmit={(e) => handleAddUser(e,formValues)}>
                <h2>Add new user</h2>
                <FormField label='Name' id='name' name='name' value={formValues.name} onChange={handleFormValueChange}/>
                <FormField label='Attendance' id='attendance' name='attendance' value={formValues.attendance} onChange={handleFormValueChange}/>
                <FormField label='Average' id='average' name='average' value={formValues.average} onChange={handleFormValueChange}/>
                <Button type='submit'>Add</Button>
            </Wrapper>
        </>
    )
}

export default AddUser;
