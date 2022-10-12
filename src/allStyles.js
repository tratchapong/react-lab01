import styled, {css} from "styled-components";

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: coral;
  color: white;
  border: 2px solid lime;
  text-align: center;
  cursor: pointer;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: white;
    color: black;
  `}

  ${props => props.secondary && css`
  background: deeppink;
  color: silver;
`}

  ${props => props.third && 'background: violet; color: brown'}
`

const Title = styled.h1`
  width: 60%;
  margin: auto;
  color: white;
  background: blue;
  ${props => props.dark && 'background: silver;'} 
`

// const TitleBS = styled.h1.attrs({
//   className : 'text-primary bg-danger display-1 text-center'
// })``

const TitleTW = styled.h1.attrs({
  className : 'text-3xl font-bold underline text-white bg-violet-700 rounded shadow-sm w-3/4 mx-auto text-center py-3 hover:bg-slate-600'
})`
  background: red;
  cursor: pointer;

  &:hover {
    color: lime;
  }
`


export const TitleSize = styled.h1.attrs( (props)=> ({
  className : `p-3 w-3/4 mx-auto text-white bg-blue-800 text-center ${props.big ? 'text-5xl' : 'text-md' }`
}))``

export const FlexCenter = styled.div.attrs( props => ({
  className : 'flex justify-center items-center'
}))``


export {Button, Title, TitleTW}
