import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Typography } from '@material-ui/core';
import { LockOpenOutlined } from '@material-ui/icons';
import InputField from './components/form-control/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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

function RegisterForm(props) {
    const classes = useStyle();
    const schema = yup.object().shape({
        fullName: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().required(),
        retypePassword: yup.string().required(),
    });
    const { form } = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        },
        resolver: yupResolver(schema),
    });
    const { isSubmitting } = form.formState;
    const handleSubmit = (values) => {};
    return (
        <div className={classes.root}>
            <Avatar className={classes.avatar}>
                <LockOpenOutlined />
            </Avatar>
            <Typography className={classes.title} component="h3" variant="h5">
                Create an account
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullName" label="Full Name:" form={form} />
                <InputField name="email" label="Email:" form={form} />
                <InputField name="password" label="Password:" form={form} />
                <InputField name="retypePassword" label="Retype Password:" form={form} />

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
