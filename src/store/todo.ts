import { createContext, Dispatch, useContext } from "react";
import axios from 'axios'


export interface TodoInterface {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type Action =
  | { type: 'RESET_TODOS'; payload: { data: TodoInterface[] } }
  | { type: 'ADD_TODO'; payload: { data: TodoInterface } }
  | { type: 'CHECK_TODO'; payload: { data: TodoInterface } }

export type ToDoDispatch = Dispatch<Action>;

export const ToDoContext = createContext<TodoInterface[] | null>(null);
export const DispatchContext = createContext<ToDoDispatch | null>(null)

export const initialTodoState: TodoInterface[] = [
]

export function useConetextState() {
  const state = useContext(ToDoContext);
  if (!state) throw new Error('Cannot find SampleProvider from useConetextState');
  return state;
}

export function useContextDispatch() {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider from useContextDispatch');
  return dispatch;
}

export const getTodos = async (dispatch: React.Dispatch<Action>) => {

  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/todos?userId=1`);
    console.log(response.data)
    dispatch({ type: 'RESET_TODOS', payload: { data: response.data } });
  } catch (e) {
    console.error(e)
  }
}

export const addTodo = async (dispatch: React.Dispatch<Action>, title: string) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/todos`, {
      userId: 1,
      title,
      Complete: false
    });
    const { id, userId, title: newTitle, Complete } = response.data
    dispatch({
      type: 'ADD_TODO', payload: {
        data: {
          id,
          userId,
          title: newTitle,
          completed: Complete
        }
      }
    });
  } catch (e) {
    console.log(e)
    throw new Error('추가 실패')
  }
}

export const checkTodo = async (dispatch: React.Dispatch<Action>,
  id: number, title: string, completed: boolean) => {
  const url = `${process.env.REACT_APP_BASE_URL}/todos/${id}`
  try {
    const response = await axios.put(url, {
      userId: 1,
      title,
      Complete: completed
    });
    const { id, userId, title: newTitle, Complete } = response.data

    dispatch({
      type: 'CHECK_TODO', payload: {
        data: {
          id,
          userId,
          title: newTitle,
          completed:Complete
        }
      }
    });
  } catch (e) {
    throw new Error('업데이트 실패')
  }
}
