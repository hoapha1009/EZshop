import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import Register from 'features/Auth/Register';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

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
    const [open, setOpen] = React.useState(false);

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
                    <Button color="inherit" onClick={handleClickOpen}>
                        Register
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
                    <DialogContentText>
                        <Register closeDiaglog={handleClose} />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
                <IconButton onClick={handleClose} className={classes.closeButton}>
                    <Close />
                </IconButton>
            </Dialog>
        </div>
    );
}

export default Header;
