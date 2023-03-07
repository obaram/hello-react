import React, {useContext, useReducer} from "react";
import Wrapper from "../components/organisms/users-list/wrapper.styles";
import FormField from "../components/molecules/form-field/form-field";
import {Button} from "../components/atoms/button/button";
import {UsersContext} from "../providers/users-provider";

const initialFormState = {
    name: '',
    attendance: '',
    average: '',
    consent: false,
    error: ''
}

const actions = {
    INPUT_CHANGE: 'INPUT_CHANGE',
    CLEAR_VALUES: 'CLEAR_VALUES',
    TOGGLE_CONSENT: 'TOGGLE_CONSENT',
    SET_FORM_ERROR: 'SET_FORM_ERROR'
}

const formReducer = (state, action) => {
    switch (action.type) {
        case actions.INPUT_CHANGE:
            return {
                ...state,
                [action.field]: action.value
            }
        case actions.CLEAR_VALUES:
            return initialFormState;
        case actions.TOGGLE_CONSENT:
            return {
                ...state,
                consent: !state.consent
            };
        case actions.SET_FORM_ERROR:
            return {
                ...state,
                error: action.value
            };
        default:
            return state
    }
}

const AddUser = () => {
    const [formValues, dispatch] = useReducer(formReducer, initialFormState);
    const {handleAddUser} = useContext(UsersContext);

    const handleFormValueChange = (e) => {
        dispatch(
            {
                type: actions.INPUT_CHANGE,
                field: e.target.name,
                value: e.target.value
            }
        )
    }

    const handleUserCreation = (e) => {
        e.preventDefault();
        if (formValues.consent) {
            handleAddUser(formValues);
            dispatch({type: actions.CLEAR_VALUES});
        } else {
            dispatch({type: actions.SET_FORM_ERROR, value: 'You need to check consent'})
        }

    }

    return (
        <>
            <Wrapper as='form' onSubmit={handleUserCreation}>
                <h2>Add new user</h2>
                <FormField label='Name' id='name' name='name' value={formValues.name} onChange={handleFormValueChange}/>
                <FormField label='Attendance' id='attendance' name='attendance' value={formValues.attendance}
                           onChange={handleFormValueChange}/>
                <FormField label='Average' id='average' name='average' value={formValues.average}
                           onChange={handleFormValueChange}/>
                <FormField label='Consent' id='consent' name='consent' type='checkbox' checked={formValues.consent}
                           onChange={() => dispatch({type: actions.TOGGLE_CONSENT})}/>
                <Button type='submit'>Add</Button>
                {formValues.error ? <p>{formValues.error}</p> : null}
            </Wrapper>
        </>
    )
}

export default AddUser;
