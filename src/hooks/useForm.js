import {useReducer} from "react";

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
            return {...action.initialValues}
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

export const useForm = (initialValues) => {
    const [formValues, dispatch] = useReducer(formReducer, initialValues);

    const handleFormValueChange = (e) => {
        dispatch(
            {
                type: actions.INPUT_CHANGE,
                field: e.target.name,
                value: e.target.value
            }
        )
    }

    const handleClearForm = () => {
        dispatch({type: actions.CLEAR_VALUES, initialValues});
    }

    const handleThrowError = (errorMessage) => {
        dispatch({type: actions.SET_FORM_ERROR, value: errorMessage})
    }

    const handleToggleConsent = () => {
        dispatch({type: actions.TOGGLE_CONSENT})
    }

    return {
        formValues,
        handleFormValueChange,
        handleClearForm,
        handleThrowError,
        handleToggleConsent
    }
}
