import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, LinearProgress, Typography } from '@material-ui/core';
import { LockOpenOutlined } from '@material-ui/icons';
import InputField from 'components/form-control/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PasswordField from 'components/form-control/PasswordField';

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

RegisterForm.defaultProps = {
    onSubmit: null,
};

const useStyle = makeStyles((theme) => ({
    root: {
        position: 'relative',
        padding: theme.spacing(2),
    },

    avatar: {
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main,
    },

    title: {
        margin: theme.spacing(2, 0, 2),
        textAlign: 'center',
    },

    submit: {
        margin: theme.spacing(3, 0, 2),
    },

    progress: {
        position: 'absolute',
        top: theme.spacing(1),
        left: 0,
        right: 0,
    },
}));

function RegisterForm({ onSubmit }) {
    const classes = useStyle();
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const schema = yup.object().shape({
        fullName: yup
            .string()
            .required('Enter full name!')
            .test('should has at least 2 words', 'Please enter at least 2 words!', (value) => {
                return value.split(' ').length >= 2;
            }),
        email: yup.string().required('Enter email!').email('Please enter a valid email!'),
        password: yup
            .string()
            .required('Please enter password!')
            .matches(
                regex,
                'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character!'
            ),
        retypePassword: yup
            .string()
            .required('Please confirm your password!')
            .oneOf([yup.ref('password')], 'Passwords dont match!'),
    });
    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        },
        resolver: yupResolver(schema),
    });
    const { isSubmitting } = form.formState;
    const handleFormSubmit = async (values) => {
        if (!onSubmit) return;
        await onSubmit(values);
    };
    return (
        <div className={classes.root}>
            {isSubmitting && <LinearProgress className={classes.progress} />}
            <Avatar className={classes.avatar}>
                <LockOpenOutlined />
            </Avatar>
            <Typography className={classes.title} component="h3" variant="h5">
                Create an account
            </Typography>
            <form onSubmit={form.handleSubmit(handleFormSubmit)}>
                <InputField name="fullName" label="Full Name:" form={form} />
                <InputField name="email" label="Email:" form={form} />
                <PasswordField name="password" label="Password:" form={form} />
                <PasswordField name="retypePassword" label="Retype Password:" form={form} />

                <Button
                    disabled={isSubmitting}
                    type="submit"
                    className={classes.submit}
                    variant="contained"
                    fullWidth
                    color="primary"
                    size="large"
                >
                    Create an account
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;
