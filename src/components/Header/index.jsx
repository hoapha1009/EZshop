import { Box, IconButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Close } from '@material-ui/icons';
import CodeIcon from '@material-ui/icons/Code';
import MODE from 'constants/mode-access';
import Login from 'features/Auth/Login';
import Register from 'features/Auth/Register';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

Header.propTypes = {};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'relative',
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
    },
    closeButton: {
        zIndex: 1,
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
    },
}));

function Header(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const loggedInUser = useSelector((state) => state.user.current);
    const isLoggedInUser = !!loggedInUser.id;
    const [mode, setMode] = useState(MODE.LOGIN);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <CodeIcon />
                    <Typography variant="h6" className={classes.title}>
                        <Link className={classes.link} to="/">
                            EZ shop
                        </Link>
                    </Typography>
                    <NavLink className={classes.link} to="/todos">
                        <Button color="inherit">TODO</Button>
                    </NavLink>
                    <NavLink className={classes.link} to="/albums">
                        <Button color="inherit">Albums</Button>
                    </NavLink>
                    {/* {!!isLoggedInUser && (
                        <Button color="inherit" onClick={handleClickOpen}>
                            Login
                        </Button>
                    )}
                    {isLoggedInUser && (
                        <Button color="inherit" onClick={handleClickOpen}>
                            Login
                        </Button>
                    )} */}
                    <Button color="inherit" onClick={handleClickOpen}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogContent>
                    {mode === MODE.REGISTER && (
                        <>
                            <Register closeDialog={handleClose} />

                            <Box textAlign="center">
                                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                                    Already have an account? Login here!
                                </Button>
                            </Box>
                        </>
                    )}
                    {mode === MODE.LOGIN && (
                        <>
                            <Login closeDialog={handleClose} />

                            <Box textAlign="center">
                                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                                    Don't have an account? Register here!
                                </Button>
                            </Box>
                        </>
                    )}
                </DialogContent>
                <IconButton onClick={handleClose} className={classes.closeButton}>
                    <Close />
                </IconButton>
            </Dialog>
        </div>
    );
}

export default Header;
