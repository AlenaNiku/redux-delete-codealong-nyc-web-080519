import uuid from 'uuid';

export default function manageTodo(state = {
  todos: [],
}, action) {

  console.log(action)

  switch (action.type) {

    case 'ADD_TODO':

      const todo = {
        id: uuid(),
        text: action.payload.text
      }

      return { todos: state.todos.concat(todo) };

    case 'DELETE_TODO':

      return { todos: state.todos.filter(todo => todo.id !== action.payload) }

    default:
      return state;
  }
}

// Our todos are stored as strings in an array. There are a number of ways to remove a specific string from an array, but one of the more brief options is to use filter. By adding a second case to our manageTodo reducer, we can write a filter that returns every todo that doesn't match what is contained in action.payload

// A Todo should have an id the moment it gets created. So, we know that our reducer creates the Todo when a CREATE_TODO action is dispatched.

// Using uuid() will generate a long random string each time a todo is created. Now, instead of just storing an array of strings in our store, we'll be storing an array of objects.

// Instead of comparing todo with action.payload, now that todo is an object, we want to match todo.id with the payload.
 