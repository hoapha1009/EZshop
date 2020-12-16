// import PropTypes from 'prop-types';
import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';

ListPage.propTypes = {};

const useStyle = makeStyles((theme) => ({
    right: {
        width: '250px',
    },

    left: {
        flex: '1 1 auto',
    },
}));

function ListPage(props) {
    const classes = useStyle();

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>Right column</Paper>
                    </Grid>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>Right column</Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;
