import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';

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
    const form = useForm({
        defaultValues: {},
    });
    return (
        <div className={classes.root}>
            <Avatar className={classes.avatar}>
                <LockOpenOutlined />
            </Avatar>
            <Typography className={classes.title} component="h3" variant="h5">
                Create an account
            </Typography>
        </div>
    );
}

export default RegisterForm;
