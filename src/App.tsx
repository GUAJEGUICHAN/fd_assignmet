import { useReducer } from 'react';

import {initialTodoState,ToDoContext,DispatchContext } from './store/todo'
import { reducer } from './store/todoReducer';

import AppInner from './AppInner';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialTodoState);
  return (
    <ToDoContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
      <AppInner/>
      </DispatchContext.Provider >
    </ToDoContext.Provider>
  )
}

export default App;
