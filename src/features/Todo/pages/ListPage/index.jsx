import TodoList from 'features/Todo/components/TodoList';
import React, { useState } from 'react';

ListPage.propTypes = {};

function ListPage(props) {
    const [fillteredStatus, setFillteredStatus] = useState('all');
    const [todoList, setTodoList] = useState(() => {
        const initTodoList = [
            {
                id: 1,
                title: 'Eat',
                status: 'new',
            },
            {
                id: 2,
                title: 'Sleep',
                status: 'completed',
            },
            {
                id: 3,
                title: 'Code',
                status: 'new',
            },
        ];
        return initTodoList;
    });
    const onTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'completed' ? 'new' : 'completed',
        };
        setTodoList(newTodoList);
    };
    // useEffect(() => {

    // },[fillteredTodo, todoList])
    const showAllClick = () => {
        setFillteredStatus('all');
    };
    const showNewClick = () => {
        setFillteredStatus('new');
    };
    const showCompletedClick = () => {
        setFillteredStatus('completed');
    };
    const filteredTodoList = todoList.filter((todo) => fillteredStatus === todo.status || fillteredStatus === 'all');
    return (
        <div>
            <TodoList todoList={filteredTodoList} onTodoClick={onTodoClick} />
            <button onClick={showAllClick}>Show all todo</button>
            <button onClick={showNewClick}>Show new todo</button>
            <button onClick={showCompletedClick}>Show completed todo</button>
        </div>
    );
}

export default ListPage;
