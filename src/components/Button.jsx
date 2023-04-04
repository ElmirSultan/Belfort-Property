import React from 'react'
import "../components/css/button.css"
const Button = ({butonYazisi}) => {
  return (
    <button className='button'>
        {butonYazisi}
    </button>
  )
}

export default Button