import Head from 'next/head'

import React, {useEffect, useState} from 'react'

//* COMPONENTS
import Cards from '../components/cards'
import Table from '../components/table'
import ModalComponent from '../components/modal'

//* STYLES
import styles from '../styles/Home.module.scss'

// * HELPERS
import currencyMask from '@/helpers/currencyMask';


export default function Home() {
  // CARDS
  const [entryValue, setEntryValue] = useState('10000')
  const [exitValue, setExitValue] = useState('5000')
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
      value: entryValue,
      category: 'Receita Fixa',
      date: '12/02/2022 às 14h04',
      type: 'entrada'
    },
    {
      id: 1,
      description: 'Curso de NextJS',
      value: exitValue,
      category: 'Educação',
      date: '12/02/2022 às 14h04',
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
  }

  const handleId = () => {
    const id = Math.floor(Math.random() * 100000)
    return id
  }

  const handleCreate = () => {
    const data = {
      id: handleId(),
      description,
      value,
      category,
      type
    }

    const draft = tableData
    draft.push(data)
    setTableData([...draft])

    if(type === 'entrada') {
      setEntryValue(entryValue + data.value)
    } else {
      setExitValue(exitValue + data.value)
    }

    toggleModal()
  }

  const handleDelete = (el, id) => {
    const draft = tableData.filter(items => items.id !== id)

    setTableData([...draft])

    if(el.id === id && el.type === 'entrada') {
      return  setEntryValue(entryValue - value)
    } else {
      return setExitValue(exitValue - value)
    }

    //!! ---------------------------CHECK IT OUT LATER------------------------------------------------ !!
    // const tableDataClone = [...tableData]
    // const index = tableDataClone.findIndex(item => item.id === id)

    // tableDataClone.splice(index, 1);

    // setTableData([...tableDataClone])

    // console.log(tableDataClone[index].type)
  }

  return (
    <>
      <Head>
        <title>Teste Ticto</title>
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
                <h1>TICTO</h1>
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
                value={currencyMask(entryValue)}
                iconType={'up'}
                />

              <Cards
                label={'Saídas'}
                value={currencyMask(exitValue)}
                iconType={'down'}
              />

              <Cards
                label={'Saldo Total'}
                value={currencyMask(entryValue - exitValue)}
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
        <ModalComponent
          isOpen={isOpen}
          toggle={toggleModal}
          setDescription={setDescription}
          setValue={setValue}
          setCategory={setCategory}
          handleCreate={handleCreate}
          setType={setType}
        />
      </main>
    </>
  )
}
