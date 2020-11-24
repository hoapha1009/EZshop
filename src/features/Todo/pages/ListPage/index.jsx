import TodoList from 'features/Todo/components/TodoList';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';
import { useMemo } from 'react';
import TodoForm from 'features/Todo/components/TodoForm';

ListPage.propTypes = {};

function ListPage(props) {
    const match = useRouteMatch();
    const history = useHistory();
    const location = useLocation();

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
    const [fillteredStatus, setFillteredStatus] = useState(() => {
        //async filters to URL params
        const params = queryString.parse(location.search);
        return params.status || 'all';
    });

    //async state to URL
    useEffect(() => {
        const params = queryString.parse(location.search);
        setFillteredStatus(params.status || 'all');
    }, [location.search]);
    const showAllClick = () => {
        // setFillteredStatus('all');
        const queryParams = {
            status: 'all',
        };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };
    const showNewClick = () => {
        // setFillteredStatus('new');
        const queryParams = {
            status: 'new',
        };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };
    const showCompletedClick = () => {
        // setFillteredStatus('completed');
        const queryParams = {
            status: 'completed',
        };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };
    const filteredTodoList = useMemo(() => {
        return todoList.filter((todo) => fillteredStatus === todo.status || fillteredStatus === 'all');
    }, [todoList, fillteredStatus]);

    const handleFormSubmit = (values) => {
        const newTodo = {
            id: todoList.length + 1,
            title: values.title,
            status: 'new',
        };
        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
    };
    return (
        <div>
            <TodoList todoList={filteredTodoList} onTodoClick={onTodoClick} />
            <TodoForm onSubmit={handleFormSubmit} />
            <button onClick={showAllClick}>Show all todo</button>
            <button onClick={showNewClick}>Show new todo</button>
            <button onClick={showCompletedClick}>Show completed todo</button>
        </div>
    );
}

export default ListPage;
