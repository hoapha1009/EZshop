import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

Header.propTypes = {};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
    },
}));

function Header(props) {
    const classes = useStyles();
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
                    <Button color="inherit">Register</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
