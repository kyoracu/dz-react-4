import { useRef } from "react"

function Input ({ name, value, handleOnChange }) {
  return (
    <input name={name} value={value} onChange={handleOnChange} className="mainInput" placeholder="Search"/>
  )
}

export default Input
