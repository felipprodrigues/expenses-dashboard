import React from 'react'

//* STYLES
import {
  TableContainer,
  TableHolder,
  TableHeadItems,
  TableBodyWrapper,
  TableContent,
} from './styles'

//* ICONS
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

//* HELPERS
import currencyMask from '@/helpers/currencyMask';

function Table({
  tableData,
  handleDelete,
  headers
}) {

  return (
    <>
      <TableContainer>
        <TableHolder
          gridColumns={"repeat(4, 1fr) 75px"}
          padding={'1rem'}
        >
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

        {tableData.map((item, index) => {
          return (
            <>
              <TableBodyWrapper
                key={`item-${item}-${index}`}
              >
                <TableHolder
                  gridColumns={"repeat(4, 1fr) 75px"}
                  hasMarginBottom={true}
                  padding={'1.5rem 1rem'}
                >
                  <TableContent>
                    <span>
                      {item.description}
                    </span>
                  </TableContent>
                  <TableContent>
                    <span
                      className="is-parsed"
                      style={{
                        color: item.type === 'entrada' ? '#06D6A2' : '#DB3766',
                      }}
                    >
                      {currencyMask(item.value)}
                    </span>
                  </TableContent>
                  <TableContent>
                    <span>
                      {item.category}
                    </span>
                  </TableContent>
                  <TableContent>
                    <span>
                      {item.date}
                    </span>
                  </TableContent>
                  <TableContent>
                    <DeleteOutlineIcon
                      style={{color: '#DB3766'}}
                      onClick={() => handleDelete(item)}
                    />
                  </TableContent>
                </TableHolder>
              </TableBodyWrapper>
            </>
            )
          }
        )}
      </TableContainer>
    </>
  )
}

export default Table
