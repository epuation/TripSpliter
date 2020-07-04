import React, { Component } from 'react'
import Todo from './containers/todo/Todo'
import {connect} from 'react-redux'
import { autoLoginCheck } from './store/actions';
import {Switch, Route, Redirect} from 'react-router'
import {NavLink} from 'react-router-dom'
import Login from './containers/auth/Login'
import Signup from './containers/auth/Signup'
import Logout from './containers/auth/Logout';
import TodoDetails from './containers/todo/TodoDetails';

class App extends Component {
  componentDidMount(){
    this.props.autoLoginCheck();
  }
  render() {
    let links = <>
    <NavLink activeClassName="act" to='/login'>Login</NavLink>
            <NavLink activeClassName="act" to='/signup'>Signup</NavLink>
    </>;    
    if(this.props.isAuth){
      links = <>
      <NavLink activeClassName="act" to='/logout'>Logout</NavLink>
      <NavLink activeClassName="act" to='/todos'>Todo List</NavLink>
      </>;      
    }

    let routes = <>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={Signup}/>
            <Redirect to="/login"/>         
    </>;    
    if(this.props.isAuth){
      routes = <>
            <Route path='/todos' exact component={Todo}/>   
            <Route path='/todos/:id' component={TodoDetails}/>   
            <Route path='/logout' component={Logout}/>
            <Redirect to="/todos"/>         
      </>;      
    }


    return (
      <div>
        {/* <nav>
          {links}
        </nav> */}
              <NavLink activeClassName="act" to='/logout'>Logout</NavLink>
            <Switch>
              {routes}
            </Switch>

      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.auth.token != null,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    autoLoginCheck: () => {dispatch(autoLoginCheck())},

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
