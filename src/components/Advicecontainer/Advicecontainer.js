import React from 'react'
import { Wrapper, Id, Advice, MobileDivider, DesktopDivider } from 'components/Advicecontainer/Advicecontainer.styles'
import Button from 'components/Button/Button'
import DividerOne from 'assets/images/pattern-divider-desktop.svg'
import DividerTwo from 'assets/images/pattern-divider-mobile.svg'

const Advicecontainer = ({quote, fetchAdvice}) => {
  return (
    <Wrapper>
    <Id>ADVICE #{quote.id}</Id>
    <Advice>"{quote.advice}"</Advice>
    <DesktopDivider>
    <img src={DividerOne} alt="divider" />
    </DesktopDivider>
    <MobileDivider>
    <img src={DividerTwo} alt="divider" />
    </MobileDivider>
    
    <Button onClick={fetchAdvice} />
    </Wrapper>
    
  )
}

export default Advicecontainer