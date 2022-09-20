import { useReducer, useState } from 'react';
import AppInner from './AppInner';
// import { AppContext, AppContextInterface, DispatchContext, sampleAppContext } from './store/info';
import {initialTodoState,ToDoContext,DispatchContext } from './store/todo'
// import { reducer } from './store/reducer';
import { reducer } from './store/todoReducer';

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