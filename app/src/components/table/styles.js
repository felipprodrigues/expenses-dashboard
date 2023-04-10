import styled, {css} from 'styled-components'

const fontSize = css`
  @media(max-width: 767px) {
    font-size: clamp(.8rem, 2.5vw, 1.5rem)
  }
`

export const TableContainer = styled.div``

export const TableHolder = styled.div`
  display: grid;
  grid-gap: clamp(.8rem, 2.5vw, 1rem);
  grid-template-columns: ${(props) => props.gridColumns};
  margin-bottom: ${(props) => props.hasMarginBottom ? '1rem' : ''};
  padding: ${(props) => props.padding};
`

export const TableHeadItems = styled.div`
  padding: 1rem 0;
  color: #B9B9B9;

  & > span {
    ${fontSize}
  }
`

export const TableBodyWrapper = styled.div`
  background-color: white;
  border-radius: 6px;

  & > div {
    @media(max-width: 767px){
      overflow-y: scroll;
    }
  }
`

export const TableContent = styled.div`
  display: flex;
  align-items: center;

  &:last-child {
    justify-content: center;
    cursor: pointer;
    transition: all .15s linear;

    &:hover {
      filter: brightness(.8)
    }
  }

  & > span {
    ${fontSize};
  }

  & > span.is-parsed {
    font-weight: 600;
  }

`
