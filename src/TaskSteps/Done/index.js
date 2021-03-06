import React from 'react'

import './styles.scss'
import Done from '../assets/Done.png'
import { makeStyles } from '@material-ui/core'
import ArrowForward from '@material-ui/icons/ArrowForward'
import StyledButton from '../../shared/Button'

const useStyles = makeStyles({
  doneBtn: {
    position: 'absolute',
    width: '179px',
    height: '48px',
    padding: '9px 0px',
    right: '59px',
    top: '31px'
  }
})
export default function DoneWidget({ onClick }) {
  const classes = useStyles()

  return (
    <div className="done-container">
      <img className="img-done" src={Done} alt="done widget" />
      <StyledButton onClick={onClick} className={classes.doneBtn} appearance="primary">
        <ArrowForward />
        <span>Следующий шаг</span>
      </StyledButton>
    </div>
  )
}
