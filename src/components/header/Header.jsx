import React, { useContext } from 'react'
import styled from 'styled-components'
import {ThemeContext} from "../store/ContextApi"
import Button from '../UI/Button'

 const Header = () => {
  const {themeLight, themedark} = useContext(ThemeContext)

  return (
    <Container>
        <Button bgColor="black" color="white" value="DARK" onClick={themeLight}></Button>
        <Button bgColor="white" value="LIGHT" onClick={themedark}></Button>
    </Container>
  )
}

export default Header;
 const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    height: 70px;
    margin-bottom: 2rem;
    gap: 2rem;
 `
