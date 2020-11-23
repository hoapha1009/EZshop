import './App.scss';
import TodoFeature from 'features/Todo';
import AlbumFeature from 'features/Album';
import { NavLink, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div className="App">
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
            <Switch>
                <Route path="/todos" component={TodoFeature} />
                <Route path="/albums" component={AlbumFeature} />
            </Switch>
        </div>
    );
}

export default App;
