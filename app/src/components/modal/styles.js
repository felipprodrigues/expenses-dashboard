import styled from 'styled-components'

export const Modal = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  background-color: #2b2b2ba8;
  position: fixed;
  min-height: 100%;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  transition: all 0.2s linear;
  z-index: 9999;
`

export const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50%;
  width: 100%;
  background: #FDFDFD;
  border-radius: 6px;
  opacity: 1;
  position: relative;

  @media (max-width: 1599px) {
    max-width: 40%;
    width: 100%;
  }

  @media (max-width: 499px) {
    height: 70%;
    width: 90%;
    max-width: 100%;
    overflow: hidden;
    overflow-y: auto;
  }
`

export const ModalHolder = styled.div`
  padding: 1.5rem;
  width: 100%;
`

export const ModalHolderClose = styled(ModalHolder)`
  align-items: center;
  display: flex;
  justify-content: flex-end;

`

export const ModalHolderContent = styled(ModalHolder)`
  display: grid;
  grid-gap: 1.5em;
`

export const ModalHolderTitle = styled(ModalHolder)`
  align-items: center;
  display: flex;
  padding: 0;

  & > h1 {
    color: #4E5555;
    letter-spacing: 0;
    font-weight: 500;
  }
`

export const ModalInputForm = styled.form`
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 1.5em;
  padding-top: 0;
`

export const ModalInput = styled.input`
  border: 1px solid #D9D9D9;
  background-color: #F7F7F7;
  border-radius: 6px;
  padding: 1rem;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`

export const ModalSelectHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  display: flex;
  grid-gap: 1rem;
  position: relative;
`

export const ModalHiddenInput = styled.input`
  width: 100%;
  height: 2.3rem;
  position: relative;
  z-index: 999;
  opacity: 0;
  cursor: pointer;
`

export const ModalButtonCoverUp = styled.span`
  display: inline-flex ;
  align-items: center;
  justify-content: center;
  width: 48%;
  padding: .5rem;
  position: absolute;
  z-index: 998;
  border: none;
  font-size: 15px;
  background-color: #fff;
  border: 1px solid #D9D9D9;
  border-radius: 6px;
  cursor: pointer;

  &:last-child {
    right: 0;
  }

  & > svg {
    margin-right: .3rem;
  }
`

export const ModalSendButton = styled.button`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #30107D;
  padding: 1rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all .15s linear;

  &:hover {
    filter: brightness(.9)
  }
`

export const ModalCloseButton = styled.a`
  align-items: center;
  cursor: pointer;
  display: flex;
  transition: filter .15s linear;

  @media (max-width: 499px) {
    top: 5px;
    right: 7px;
    background-color: transparent;
  }

  & > span {
    color: white;
    margin-right: 0.75em;
  }

  & > svg {
    fill: white;
  }

  &:hover {
    filter: brightness(0.9);
  }
`

export const ModalIconHolder = styled.div`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .15s linear;

  &:hover {
    background-color: #f2f2f2;
  }
`
