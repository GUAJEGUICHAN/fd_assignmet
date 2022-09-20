import { TodoInterface,Action } from './todo';

export function reducer(state: TodoInterface[], action: Action): TodoInterface[] { 

  if(action.type==="RESET_TODOS"){
    return [
      ...action.payload.data
    ]
  }else if(action.type==="ADD_TODO"){
    return [
      ...state,
      action.payload.data
    ];
  }else if(action.type==="CHECK_TODO"){
    const newData = action.payload.data
    
    state.forEach(data=>{
      if(data.id === newData.id){
        data.completed=newData.completed
      }
    })

    return [
      ...state,
    ];
  }else{
    throw new Error('Unhandled action');
  }
}
