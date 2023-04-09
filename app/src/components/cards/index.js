import React, {useState} from 'react'

//* STYLES
import {
  CardWrapper,
  CardLabel,
  CardContent
} from './styles'
import styles from '../../styles/Home.module.scss'

//* ICONS
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Cards({
  label,
  value,
  iconType,
  bgColor,
  fontColor
}) {
  return (
    <CardWrapper bgColor={bgColor} >
      <CardLabel fontColor={fontColor}>
        <h2>
          {label}
        </h2>

        {iconType && iconType === 'up' && (
          <ArrowOutwardIcon style={{color: '#06D6A2'}}/>
        )}

        {iconType && iconType === 'down' && (
          <ArrowOutwardIcon className={styles.is_rotated} style={{color: '#DB3766'}}/>
        )}

      </CardLabel>

      <CardContent fontColor={fontColor}>
        <span>
          {value}
        </span>
      </CardContent>
    </CardWrapper>
  )
}

export default Cards
