import React, { Component } from 'react'
import Div from './div'

export default class Todo extends Component {

    constructor();{
        super();

        this.createTodo = this.createTodo.bind(this)

    }

    createTodo(Todo) {
        return <li key = {Todo.key}>{Todo.text}</li>
    }

    render() {
        const list = this.props.entitries;
        const todo = list.map(createTodo());
        return (
            <div>
                <ul>
                    {todo}
                </ul>
            </div>               
        );
    }
}
