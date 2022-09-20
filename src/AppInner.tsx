import styled from '@emotion/styled';

import InputContainer from './components/InputContainer';
import TodoBoxContainer from './components/TodoBoxContainer';

const Backgournd = styled.div`
  flex:1;
  display:flex;
  justify-content:center;
  padding-top:1rem;
`

const Conatiner = styled.div`
  display:grid;
  grid-template-rows: auto 1fr;
  gap:2rem;
`

const AppInner = () => {
  return (
    <Backgournd>
      <Conatiner>
        <InputContainer />
        <TodoBoxContainer />
      </Conatiner>
    </Backgournd>
  )
}

export default AppInner;