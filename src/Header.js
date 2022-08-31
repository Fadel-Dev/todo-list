import React from 'react'

export default function Header() {
    const header={
        position:"abolute",
        top:0,
        backgroundColor:"grey",
    }
  return (
    <div style={header}>
        <h1>Bienvenevu dans notre To do List</h1>
    </div>
  )
}
