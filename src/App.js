import './App.scss';
import TodoFeature from 'features/Todo';
import AlbumFeature from 'features/Album';
import { NavLink, Route, Switch } from 'react-router-dom';
import NotFound from 'components/NotFound';
import Header from 'components/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <p>
                <NavLink to="/todos" activeClassName="active-menu">
                    Todo
                </NavLink>
            </p>
            <p>
                <NavLink to="/albums" activeClassName="active-menu">
                    Album
                </NavLink>
            </p>
            <p>
                <NavLink to="/" activeClassName="active-menu">
                    Home
                </NavLink>
            </p>
            <Switch>
                <Route path="/" component={TodoFeature} exact />
                <Route path="/todos" component={TodoFeature} exact />
                <Route path="/albums" component={AlbumFeature} exact />

                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;
