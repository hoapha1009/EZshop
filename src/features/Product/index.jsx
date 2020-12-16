import React from 'react';
import PropTypes from 'prop-types';
import ListPage from 'features/Todo/pages/ListPage';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

ProductFeature.propTypes = {};

function ProductFeature(props) {
    const match = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route path={match.url} component={ProductFeature} exact />
                <Route path={`${match.url}/list`} component={ListPage} />
            </Switch>
        </div>
    );
}

export default ProductFeature;
