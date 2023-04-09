import React from 'react'

//* STYLES
import {
  Modal,
  ModalInner,
  ModalHolderContent,
  ModalInputHolder,
  ModalHolderTitle,
  ModalSelectHolder,
  ModalInput,
  ModalCloseButton,
  ModalIconHolder,
  ModalHolderClose,
  ModalSendButton,
  ModalHiddenInput,
  ModalButtonCoverUp
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
  setType
}) {

  return (
    <Modal isOpen={isOpen}>
      <ModalInner>
        <ModalHolderClose>
          <ModalCloseButton
            onClick={toggle}
          >
            <ModalIconHolder>
              <CloseIcon />
            </ModalIconHolder>
          </ModalCloseButton>
        </ModalHolderClose>

        <ModalHolderContent>
          <ModalInputHolder>
            <ModalHolderTitle>
              <h1>Cadastrar Transação</h1>
            </ModalHolderTitle>

              <ModalInput
                name="name"
                id="name"
                placeholder='Nome'
                required
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

              <ModalSelectHolder>
                <ModalHiddenInput
                  type="radio"
                  name="button"
                  id="entrada"
                  onChange={() => setType('entrada')}
                />
                <ModalButtonCoverUp>
                  <ArrowCircleUpIcon style={{color: '#06D6A2'}}/>
                  Entrada
                </ModalButtonCoverUp>

                <ModalHiddenInput
                  name="button"
                  id="saida"
                  type="radio"
                  onChange={() => setType('saida')}
                  />
                <ModalButtonCoverUp>
                  <ArrowCircleDownIcon style={{color: '#DB3766'}}/>
                  Saída
                </ModalButtonCoverUp>
              </ModalSelectHolder>

              <ModalInput
                name="category"
                id="category"
                placeholder='Categoria'
                required
                onChange={({target}) => setCategory(target.value)}
              />

              <ModalSendButton
                onClick={() => handleCreate()}
              >
                CADASTRAR
              </ModalSendButton>

          </ModalInputHolder>
        </ModalHolderContent>
      </ModalInner>
    </Modal>
  )
}

export default ModalComponent
