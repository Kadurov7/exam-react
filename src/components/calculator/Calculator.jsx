import React, { useReducer, useState } from 'react'
import styled from 'styled-components';
import Button from '../UI/Button';

const nums ={
  num1: 0,
  num2: 0,
}
 
const reduser =(state, action)=>{
     switch(action.type) {
      case "add":
        return(state = action.payload.num1 + action.payload.num2)
       break;
       case "minus":
        return(state = action.payload.num1 - action.payload.num2)
       break;
      case "product":
        return(state = action.payload.num1 * action.payload.num2)
       break;
      case "division":
        return(state = action.payload.num1 / action.payload.num2)
       break;

     }
}

const Calculator = ()=>{

const [state, setNums] = useState("")
const [result, dispatch] = useReducer(reduser, state)


const inputChange = (e)=>{
   setNums({...state,num1:parseInt(e.target.value)})
 
}

const inputTwoChange = (e)=>{
  setNums({...state,num2:parseInt(e.target.value)})
 

}

const pluseHandler = ()=>{
  dispatch({type:"add",payload:{num1:state.num1, num2:state.num2}})
 
}

const minusHandler = ()=>{
  dispatch({type:"minus",payload:{num1:state.num1, num2:state.num2}})

}
const producHandler = ()=>{
  dispatch({type:"product",payload:{num1:state.num1, num2:state.num2}})

}

const divisionHandler = ()=>{
  dispatch({type:"division",payload:{num1:state.num1, num2:state.num2}})

}
    return(
      <Container>
        <Input 
              type="number"
              onChange={inputChange} />

        <Input 
              type="number"
              onChange={inputTwoChange} />
          
       <Span>RESULT: {result}</Span>
      <ButtonContainer>
        <Button onClick={pluseHandler} value="+"></Button>
        <Button onClick={minusHandler} value="-"></Button>  
        <Button onClick={producHandler} value="*"></Button>  
        <Button onClick={divisionHandler} value="/"></Button>  
        </ButtonContainer>  
      </Container>
    )
};

export default Calculator;  

const Container = styled.div`
   display: flex;
   margin: auto;
   flex-direction: column;
   align-items: center;
   gap:1rem;
`
const Input = styled.input`
 height:30px;
 width: 110px;
 text-align: center;
 font-size: x-large;
 border-radius: 7px;
`
const Span = styled.span`
  color: #000000;
  font-size: x-large;
`
const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
`