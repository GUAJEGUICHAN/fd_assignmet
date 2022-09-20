import styled from '@emotion/styled';
import { List, Typography } from 'antd';
import React, { useEffect } from 'react'
import { useConetextState, useContextDispatch, getTodos, TodoInterface } from '../store/todo'
import TodoBox from './TodoBox';

const Container = styled.div`
  display:grid;
  grid-template-rows:auto auto ;
  gap:1rem;
`

const TodosContainer = styled.div`
  display:grid;
  grid-template-rows: auto 1fr;
  padding:1rem;
`
const Title = styled.div`
  display:grid;
  place-items:center;
`

const TodoBoxContainer = () => {
  const state = useConetextState();
  const notCompletedList: TodoInterface[] = []
  const completedList: TodoInterface[] = []
  state.filter(data => {
    if (data.completed) {
      completedList.push(data)
    } else {
      notCompletedList.push(data)
    }
  })

  const dispatch = useContextDispatch();
  useEffect(() => {
    getTodos(dispatch)
  }, [])

  return (
    <Container>
      <TodosContainer
        style={{
          border: '1px solid #D9D9D9'
        }}
      >
        <Title>
          <h3>ToDo LIST</h3>
        </Title>
        {notCompletedList.map((data) => (
          <TodoBox
            key={data.id}
            id={data.id}
            completed={data.completed}
            title={data.title}
            testDispatch={dispatch}
          />
        ))
        }
      </TodosContainer>
      <TodosContainer
        style={{
          border: '1px solid #1990FF'
        }}
      >
        <Title>
          <h3
            style={{
              color: '#1990FF'
            }}
          >Completed LIST</h3>
        </Title>
        {completedList.map((data) => (
          <TodoBox
            key={data.id}
            id={data.id}
            completed={data.completed}
            title={data.title}
            testDispatch={dispatch}
          />
        ))
        }
      </TodosContainer>
    </Container>
  )
}

export default TodoBoxContainer;