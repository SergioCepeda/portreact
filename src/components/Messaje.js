import React from 'react'

const Messaje = ({msg , bgColor}) => {
    let styles={
        padding: "0.1rem",
        marginBottom:"0.1rem",
        textAlign:"center",
        color:"#198754",
        fontWeight:"bold",
        backgroundColor: bgColor
    }
  return (
    <div style={styles}>
        <p>{msg}</p>
    </div>
  )
}

export default Messaje