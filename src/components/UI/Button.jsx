import React from 'react'
import styled from 'styled-components'

const Button = ({value,bgColor,color, onClick}) => {
  return (
    <Buttons onClick={onClick} style={{backgroundColor:`${bgColor}`, color:`${color}`}}>{value}</Buttons>
  )
}

export default Button;

const Buttons = styled.button`
    padding: 6px 12px;
    background-color: #b6b3b3;
    border-radius: 4px;
`

