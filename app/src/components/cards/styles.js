import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: ${(props) => props.bgColor ? '#06D6A2' : '#fff'};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 6px;
`

export const CardLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  align-items: center;

  & > h2 {
    font-weight: 300;
    color: ${(props) => props.fontColor ? '#fff' : '#4E5555'}
  }
`

export const CardContent = styled.div`
  & > span {
    font-size: 2.5rem;
    color: ${(props) => props.fontColor ? '#fff' : '#4E5555'};
  }
`
