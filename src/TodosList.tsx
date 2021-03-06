import React from 'react';
import './TodosList.css';

interface TodoListProps {
    items: {id: string, text: string}[]
}

const TodoList: React.FC<TodoListProps> = (props) => {

    return(
        <ul>
            {
                props.items.map(item => <li key={item.id}>{item.text}</li>)
            }
        </ul>
    )
};

export default TodoList;