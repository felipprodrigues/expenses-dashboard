import React from 'react'

//* STYLES
import {
  Modal,
  ModalInner,
  ModalHolderCloseBtn,
  ModalContent,
  ModalTitle,
  ModalToggleHolder,
  ModalInput,
  ModalCloseButton,
  ModalIconHolder,
  ModalSendButton,
  ModalToggleInput,
  ModalToggleCoverUp,
  ModalForm
} from './styles'

//* ICONS
import CloseIcon from '@mui/icons-material/Close';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

function ModalComponent({
  isOpen,
  toggle,
  setDescription,
  setValue,
  setCategory,
  handleCreate,
  setType,
  type
}) {

  return (
    <Modal isOpen={isOpen}>
      <ModalInner>
        <ModalHolderCloseBtn>
          <ModalCloseButton
            onClick={toggle}
          >
            <ModalIconHolder>
              <CloseIcon />
            </ModalIconHolder>
          </ModalCloseButton>
        </ModalHolderCloseBtn>

        <ModalContent>
          <ModalTitle>
            <h1>Cadastrar Transação</h1>
          </ModalTitle>

          <ModalForm>
            <ModalInput
              name="description"
              id="description"
              placeholder='Descrição'
              required={"true"}
              onChange={({target}) => setDescription(target.value)}
            />
            <ModalInput
              name="value"
              id="value"
              placeholder='Preço'
              required
              type="text"
              onChange={({target}) => setValue(parseFloat(target.value))}
            />

            <ModalToggleHolder>
              <ModalToggleInput
                type="radio"
                name="button"
                id="entrada"
                onChange={() => {setType('entrada')}}
              />
              <ModalToggleCoverUp
                bgColor={type === 'entrada' ? '#06D6A2' : '#fff'}
                fontColor={type === 'entrada' ? '#fff' : '#4E5555'}
                >
                <ArrowCircleUpIcon style={{color: type === 'entrada' ? '#fff' : '#06D6A2'}}/>
                Entrada
              </ModalToggleCoverUp>

              <ModalToggleInput
                name="button"
                id="saida"
                type="radio"
                onChange={() => {setType('saida')}}
              />
              <ModalToggleCoverUp
                bgColor={type === 'saida' ? '#DB3766' : '#fff'}
                fontColor={type === 'saida' ? '#fff' : '#4E5555'}
              >
                <ArrowCircleDownIcon style={{color: type === 'saida' ? '#fff' : '#DB3766'}}/>
                Saída
              </ModalToggleCoverUp>
            </ModalToggleHolder>

            <ModalInput
              name="category"
              id="category"
              placeholder='Categoria'
              required
              onChange={({target}) => setCategory(target.value)}
            />

            <ModalSendButton
              onClick={() => handleCreate()}
              type="reset"
            >
              CADASTRAR
            </ModalSendButton>
          </ModalForm>

        </ModalContent>
      </ModalInner>
    </Modal>
  )
}

export default ModalComponent
