import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
import { register } from '../userSlice';

Register.propTypes = {
    closeDialog: PropTypes.func,
};

function Register(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const handleFormSubmit = async (values) => {
        try {
            values.username = values.email;
            console.log('Form submit: ', values);
            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);

            // Close dialog
            const { closeDialog } = props;
            if (closeDialog) {
                closeDialog();
            }

            // Show snackbar
            enqueueSnackbar('Register successfully!', { variant: 'success' });
            console.log('New user: ', user);
        } catch (error) {
            console.log(error);
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    };
    return (
        <div>
            <RegisterForm onSubmit={handleFormSubmit} />
        </div>
    );
}

export default Register;
