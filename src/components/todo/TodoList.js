import React, { useState } from 'react'
import Todo from './Todo'
import {
    Grid,
} from '@material-ui/core/'
export default function TodoList(props) {
    const [si, setsi] = useState("")
    return (
        <div>
            <h1>list.......</h1>
            <input type={si} onChange={(e)=>{setsi(e.target.value)}} />
            <Grid container spacing={24}>
            {
                props.todos
                ? props.todos.map(t1 => 
                    {
                        if(t1.title.match(si)){
                            return <Grid item md={3} style={{margin: 30}} key={t1.id}><Todo completeTodo={props.completeTodo} deleteTodo={props.deleteTodo} 
                            updateTodo={props.updateTodo}           t1 = {t1}/></Grid>    
                        }
                        else {
                            return null;
                        }
                    })
                : <h1>Loading....</h1>
            }
            </Grid>
        </div>
    )
}
