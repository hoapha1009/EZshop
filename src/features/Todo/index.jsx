import React, { useState } from 'react';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {};

function TodoFeature(props) {
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
    return (
        <div>
            <TodoList todoList={todoList} onTodoClick={onTodoClick} />
        </div>
    );
}

export default TodoFeature;
