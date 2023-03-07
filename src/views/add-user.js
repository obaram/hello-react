import React, {useContext} from "react";
import Wrapper from "../components/organisms/users-list/wrapper.styles";
import FormField from "../components/molecules/form-field/form-field";
import {Button} from "../components/atoms/button/button";
import {UsersContext} from "../providers/users-provider";
import {useForm} from "../hooks/useForm";

const initialFormState = {
    name: '',
    attendance: '',
    average: '',
    consent: false,
    error: ''
}


const AddUser = () => {
    const {formValues, handleFormValueChange, handleClearForm, handleThrowError, handleToggleConsent} = useForm(initialFormState);
    const {handleAddUser} = useContext(UsersContext);

    const handleUserCreation = (e) => {
        e.preventDefault();
        if (formValues.consent) {
            handleAddUser(formValues);
            handleClearForm();
        } else {
            handleThrowError('You need to give consent');
        }
    }

    return (
        <>
            <Wrapper as='form' onSubmit={handleUserCreation}>
                <FormField label='Name' id='name' name='name' value={formValues.name} onChange={handleFormValueChange}/>
                <FormField label='Attendance' id='attendance' name='attendance' value={formValues.attendance}
                           onChange={handleFormValueChange}/>
                <FormField label='Average' id='average' name='average' value={formValues.average}
                           onChange={handleFormValueChange}/>
                <FormField label='Consent' id='consent' name='consent' type='checkbox' checked={formValues.consent}
                           onChange={handleToggleConsent}/>
                <Button type='submit'>Add</Button>
                {formValues.error ? <p>{formValues.error}</p> : null}
            </Wrapper>
        </>
    )
}

export default AddUser;
