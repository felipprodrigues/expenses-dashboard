import React from 'react'

//* STYLES
import {
  TableHolder,
  TableHeadItems,
  TableBodyWrapper,
  TableContent,
} from './styles'

//* ICONS
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

//* HELPERS
import currencyMask from '@/helpers/currencyMask';
import getCurrentDate from '@/helpers/getCurrentDate';

function Table({
  tableData,
  handleDelete,
  headers
}) {
  console.log(tableData, 'aqui ')
  return (
    <>
        <TableHolder gridColumns={"repeat(4, 1fr) 75px"} padding={'1rem'}>
          {headers.map((items, index) => {
            return (
              <>
                <TableHeadItems
                  key={`item-${items}-${index}`}
                >
                  <span>
                    {items.label}
                  </span>
                </TableHeadItems>
              </>
            )
          })}
        </TableHolder>

        {tableData.map((items, index) => {
          return (
            <>
              <TableBodyWrapper>
                <TableHolder
                  gridColumns={"repeat(4, 1fr) 75px"}
                  hasMarginBottom={true}
                  padding={'1.5rem 1rem'}
                >
                  <TableContent>
                    <span>
                      {items.description}
                    </span>
                  </TableContent>
                  <TableContent>
                    {items.type === 'entrada' ? (
                      <span style={{color: '#06D6A2', fontWeight: 600}}>
                        {currencyMask(items.value)}
                      </span>
                    )
                    : (
                      <span style={{color: '#DB3766', fontWeight: 600}}>
                        {currencyMask(items.value)}
                      </span>
                    )}
                  </TableContent>
                  <TableContent>
                    <span>
                      {items.category}
                    </span>
                  </TableContent>
                  <TableContent>
                    <span>
                      {getCurrentDate()}
                    </span>
                  </TableContent>
                  <TableContent>
                    <DeleteOutlineIcon
                      style={{color: '#DB3766'}}
                      onClick={() => handleDelete(items, items.id)}
                    />
                  </TableContent>
                </TableHolder>
              </TableBodyWrapper>
            </>
            )
          }
        )}
    </>
  )
}

export default Table
