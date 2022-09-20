import { memo, useState } from 'react'

import { checkTodo, ToDoDispatch } from '../store/todo';

import { Checkbox, message } from 'antd';

type TodoBoxProps={
  id:number;
  title:string;
  completed:boolean;
  dispatch:ToDoDispatch;
}

const TodoBox = ({id,title,completed,dispatch}:TodoBoxProps) => {
  const [isLoading, setLoading] = useState(false)
  const handleCompletion =()=>{
    message.loading('변경사항 반영중..',1)
    setLoading(true)
    checkTodo(dispatch, id,title,!completed).then(()=>{
      message.success('업데이트 완료', 1)
    }).catch(e=>{
      message.error(e.message, 1)
    }).finally(()=>{
      setLoading(false)
    })
  }

  return (
    <div>
      <Checkbox
        onChange={handleCompletion}
        disabled={isLoading }
        checked={completed}
        >
          {title}
      </Checkbox>
    </div>
  )
}

export default memo(TodoBox)