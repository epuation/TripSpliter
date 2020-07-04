import React, { Component } from 'react'

export default class componentName extends Component {
    state = {
        title: '',
        description: ''
    }
    onChangeHand = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onAddHand = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title, this.state.description);
        this.setState({
            title: '',
            description: ''
        })
    }
    render() {
        return (
            <div>
                <input name="title" value={this.state.title} onChange={this.onChangeHand} />
                <input name="description" value={this.state.description} onChange={this.onChangeHand} />
                <button onClick={this.onAddHand}>Add</button>
            </div>
        )
    }
}
