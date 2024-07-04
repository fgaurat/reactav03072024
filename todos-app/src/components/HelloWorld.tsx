
import React from 'react'

// function HelloWorld(props:any) {
//     const {name,firstName} = props
function HelloWorld({name,firstName}:any) {
    console.log("render HelloWorld")
    return (
    <>
    <h1>Hello {name} {firstName}</h1>
    </>
  )
}

export default HelloWorld



