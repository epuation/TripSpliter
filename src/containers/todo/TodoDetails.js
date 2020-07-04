import React, { useState, Component } from 'react'
import * as actions from '../../store/actions'
import {connect} from 'react-redux'

class TodoDetails extends Component {
    render(){    
        const onCompHand = () => {
           this.props.completeTodo(this.props.t1);
        }
        const onDelHand = () => {
            this.props.deleteTodo(this.props.t1);
        }
        return (
                <div>
                <p>{this.props.t1.title}
                <button onClick={onCompHand}>Complete</button>
                <button onClick={onDelHand}>Delete</button>
                </p>
            </div>
        )    
    }
}

const mapStateToProps = (state, ownProps) => {
    let selTodo = state.todo.todos.find(t1 => {
        return t1._id === ownProps.match.params.id;
    })
    return {
      t1: selTodo,
    }
  }  
const mapDispatchToProps = dispatch => {
    return {
        completeTodo: (t1) => dispatch(actions.completeTodo(t1)),
        deleteTodo: (t1) => dispatch(actions.deleteTodo(t1)),
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(TodoDetails)
