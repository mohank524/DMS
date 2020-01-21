import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const TodoList = ({ todos, deleteTodo }) => (
  <List>
    {todos.map((todo, index) => (
      <ListItem key={index.toString()} dense button >
        <ListItemText primary={todo} />
        <ListItemSecondaryAction>
          <Checkbox tabIndex={-1} disableRipple 
              onClick={() => {
                deleteTodo(index);
              }}/>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
);

export default TodoList;
