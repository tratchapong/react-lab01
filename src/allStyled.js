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

export {Button}
