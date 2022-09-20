import { useState } from "react";

import { addTodo, useContextDispatch } from "../store/todo";

import { Input } from 'antd';

import Notification from "./Notification";

const InputContainer = () => {
  const [title, setTitle] = useState<string>('')
  const [isLoading, setLoading] = useState<boolean>(false)

  const dispatch = useContextDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value)
    setTitle(value)
  }

  const handleSubmit = (value:string) => {
    setLoading(true)
    console.log(value)
    addTodo(dispatch,title).then(()=>{
      Notification('success','성공적으로 추가했습니다.','')
    }
    ).catch(()=>{
      Notification('error','할일 추가에 실패했습니다.','')
    }).finally(()=>{
      setLoading(false)
      setTitle('')
      console.log("제출 완료했습니다.")
    })
  }
  return (
    <Input.Search
      maxLength={100}
      placeholder="할 일을 입력하세요"
      allowClear
      enterButton="Add"
      size="large"
      value={title}
      loading={isLoading}
      onChange={handleChange}
      onSearch={(value)=>{handleSubmit(value)}}
  />
  )
}

export default InputContainer