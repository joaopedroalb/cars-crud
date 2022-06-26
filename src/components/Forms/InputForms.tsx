import React from 'react'
import { InputContainer } from '../../styles/components'

type InputProps = {
  name: string
  label: string
  value: any
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  error?: string|null
  placeholder?: string
  min?: number
  max?: number

  width?:string
}

export default function InputForms({name,label,value,onChange,type,error,placeholder,max,min,width}:InputProps) {
  return (
    <InputContainer width={width ? width:'50%'}>
        <label htmlFor={name} className='label'>
            {label}
        </label>
        <input type={type} id={name} 
              onChange={onChange} value={value} 
              className='input' placeholder={placeholder}
              min={min} max={max}
        />
        {error&&<p className='error'>{error}</p>}
    </InputContainer>
  )
}
