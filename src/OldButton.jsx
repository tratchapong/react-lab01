import React from 'react'

function OldButton(props) {
  let stbase = {color: 'white', background: 'blue', padding: '10px', margin: '8px'}
  let st = stbase
  st = props.primary ? {...stbase, color: 'deeppink', background: 'lime'} : st
  st = props.secondary ? {...stbase, color: 'white', background: 'red'} : st
  // console.log(st)

  return (  
    <button style={st} onClick={props.onClick}>{props.children}</button>
    // <button style={st} {...props}>{props.children}</button>
  )
}

export default OldButton