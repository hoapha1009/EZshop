import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
    const handleTodoClick = (todo, idx) => {
        if (!onTodoClick) return;
        onTodoClick(todo, idx);
    };
    return (
        <ul>
            {todoList.map((todo, idx) => (
                <li key={todo.id} onClick={() => handleTodoClick(todo, idx)}>
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
