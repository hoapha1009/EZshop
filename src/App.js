import './App.scss';
import TodoFeature from 'features/Todo';
import AlbumFeature from 'features/Album';

function App() {
    return (
        <div className="App">
            Todo list:
            <TodoFeature />
            Album list:
            <AlbumFeature />
        </div>
    );
}

export default App;
