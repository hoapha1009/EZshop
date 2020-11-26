import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LockOpenOutlined } from '@material-ui/icons';
import InputField from 'components/form-control/InputField';
import PasswordField from 'components/form-control/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
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

function LoginForm({ onSubmit }) {
    const classes = useStyle();
    const schema = yup.object().shape({
        identifier: yup.string().required('Enter email!').email('Please enter a valid email!'),
        password: yup.string().required('Please enter password!'),
    });
    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
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
                Login
            </Typography>
            <form onSubmit={form.handleSubmit(handleFormSubmit)}>
                <InputField name="identifier" label="Email:" form={form} />
                <PasswordField name="password" label="Password:" form={form} />

                <Button
                    disabled={isSubmitting}
                    type="submit"
                    className={classes.submit}
                    variant="contained"
                    fullWidth
                    color="primary"
                    size="large"
                >
                    Login
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;
