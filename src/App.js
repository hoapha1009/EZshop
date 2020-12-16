import Header from 'components/Header';
import NotFound from 'components/NotFound';
import AlbumFeature from 'features/Album';
import CounterFeature from 'features/Counter';
import ProductFeature from 'features/Product';
import TodoFeature from 'features/Todo';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" component={TodoFeature} exact />
                <Route path="/todo" component={TodoFeature} />
                <Route path="/counter" component={CounterFeature} />
                <Route path="/album" component={AlbumFeature} />
                <Route path="/product" component={ProductFeature} />

                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;
