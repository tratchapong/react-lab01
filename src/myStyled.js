import styled, {css} from "styled-components";

const MyButton = styled.button`
  padding : 10px;
  margin : 8px;
  color: white;
  background-color: blue;
  width : ${ 20*5 }px;

  &:hover {
    background: palevioletred;
  }
  
  ${props => props.primary && `
    color: red; background:gold
  `}

`

export {MyButton}
