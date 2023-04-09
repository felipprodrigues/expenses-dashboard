import styled from 'styled-components'

export const TableHolder = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: ${(props) => props.gridColumns};
  margin-bottom: ${(props) => props.hasMarginBottom ? '1rem' : ''};
  padding: ${(props) => props.padding};
`

export const TableHeadItems = styled.div`
  padding: 1rem 0;
  color: #B9B9B9;
`

export const TableBodyWrapper = styled.div`
  background-color: white;
  border-radius: 6px;
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
`
