import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: ${(props) => props.bgColor ? '#06D6A2' : '#fff'};
  padding: clamp(1.2rem, 2.5vw, 2rem);
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 6px;

  &:first-of-type,
  &:nth-child(2) {
    @media(max-width: 767px) {
      grid-row-start: 2;
    }
  }

  &:last-of-type {
    @media(max-width: 767px) {
      grid-column: span 2;
      align-items: center;
    }

    & > * h2 {
      @media(max-width: 767px) {
        font-size: 1.4rem !important;
      }
    }
    & > * span {
      @media(max-width: 767px) {
        font-size: 1.8rem;
      }
    }
  }
`

export const CardLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: clamp(1.5rem,2.5vw,2.5rem);
  align-items: center;

  & > h2 {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    font-weight: 300;
    color: ${(props) => props.fontColor ? '#fff' : '#4E5555'}
  }
`

export const CardContent = styled.div`
  & > span {
    font-size: clamp(1rem, 2.5vw, 2.5rem);
    color: ${(props) => props.fontColor ? '#fff' : '#4E5555'};
  }
`
