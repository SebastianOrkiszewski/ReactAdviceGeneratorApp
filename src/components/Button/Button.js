import React from 'react'
import Dice from 'assets/images/icon-dice.svg'
import { Wrapper } from 'components/Button/Button.styles'

const Button = (props) => {
  return (
    
    <Wrapper onClick={props.onClick}>
    <img src={Dice} alt="dice" />
    </Wrapper>
    
    
  )
}

export default Button