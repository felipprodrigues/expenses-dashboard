//* UTILS
import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import 'react-toastify/dist/ReactToastify.css';

//* COMPONENTS
import Cards from '../components/cards'
import Table from '../components/table'
import ModalComponent from '../components/modal'
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify'

//* STYLES
import styles from '../styles/Home.module.scss'

// * HELPERS
import getCurrentDate from '@/helpers/getCurrentDate';

export default function Home() {
  // CARDS
  const [entryValue, setEntryValue] = useState(7350)
  const [exitValue, setExitValue] = useState(899)
  const [value, setValue] = useState(0)

  // MODAL
  const [isOpen, setIsOpen] = useState(false)
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [type, setType] = useState('entrada')
  const [tableData, setTableData] = useState([
    {
      id: 0,
      description: 'Salário',
      value: 7350,
      category: 'Receita Fixa',
      date: '12/02/2022 às 14h04',
      type: 'entrada'
    },
    {
      id: 1,
      description: 'Introdução à NextJs',
      value: 899,
      category: 'Educação',
      date: '12/02/2022 às 19h32',
      type: 'saida'
    }
  ])

  const headers = [
    {
      label: 'Descrição'
    },
    {
      label: 'Valor'
    },
    {
      label: 'Categoria'
    },
    {
      label: 'Data'
    },
    {
      label: ''
    },
  ]

  useEffect(() => {
  }, [tableData])

  const toggleModal = () => {
    setIsOpen(() => !isOpen)
    resetInput()
  }

  const handleId = () => {
    const id = Math.floor(Math.random() * 100000)
    return id
  }

  const resetInput = () => {
    setValue(0)
    setDescription('')
    setCategory('')
  }

  const handleCreate = async () => {
    if(!value || !description || !category) {
      toast.error('Preencha todos os campos!')
      return
    }

    try {
      const data = {
        id: handleId(),
        description,
        value,
        category,
        type,
        date: getCurrentDate()
      }

      const draft = tableData
      draft.push(data)
      setTableData([...draft])

      if(data.type === 'entrada') {
        setEntryValue(entryValue + data.value)
      } else {
        setExitValue(exitValue + data.value)
      }

      toggleModal()
      resetInput()

      toast.success('Dados atualizados com sucesso!')
    } catch {
      toast.error('Algo deu errado. Tente novamente!')
    }
  }

  const handleDelete = (el) => {
    const draft = tableData.filter(item => item.id !== el.id)

    setTableData([...draft])

    if(el.type === 'entrada') {
      setEntryValue((currentVal) => currentVal - el.value)
    } else {
      setExitValue((currentVal) => currentVal - el.value)
    }

    toast.success(`${el.description} removido com sucesso!`)
  }

  return (
    <>
      <ToastContainer autoClose={3000}/>
      <Head>
        <title>Expenses Dashboard</title>
        <meta name="description" content="Criado por Felipe Rodrigues" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <div className={styles.header__wrapper}>
            <div className={styles.header__holder}>
              <div className={styles.header__content}>
                <h1>Expenses Dashboard</h1>
              </div>

              <div className={styles.header__content}>
                <button
                  onClick={() => toggleModal()}
                >
                  NOVA TRANSAÇÃO
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className={styles.content}>
          <div className={styles.content__wrapper}>
            <div className={styles.content__grid}>
              <Cards
                label={'Entradas'}
                value={entryValue}
                iconType={'up'}
                />

              <Cards
                label={'Saídas'}
                value={exitValue}
                iconType={'down'}
              />

              <Cards
                label={'Saldo Total'}
                value={entryValue - exitValue}
                bgColor={true}
                fontColor={true}
              />
            </div>

            <Table
              handleDelete={handleDelete}
              tableData={tableData}
              headers={headers}
            />
          </div>
        </div>

        {/* MODAL */}
        {isOpen &&
          <ModalComponent
            isOpen={isOpen}
            toggle={toggleModal}
            setDescription={setDescription}
            setValue={setValue}
            setCategory={setCategory}
            handleCreate={handleCreate}
            setType={setType}
            type={type}
          />
        }
      </main>
    </>
  )
}
