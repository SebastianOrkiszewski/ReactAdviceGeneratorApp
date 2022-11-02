import React from 'react'
import { Wrapper } from 'components/Advicecontainer/Advicecontainer.styles'
import Button from 'components/Button/Button'


const Advicecontainer = ({quote, fetchAdvice}) => {
  return (
    <Wrapper>
    <h1>{quote.id}</h1>
    <p>{quote.advice}</p>
    <Button onClick={fetchAdvice} />
    </Wrapper>
    
  )
}

export default Advicecontainer