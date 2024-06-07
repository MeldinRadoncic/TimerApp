import React from 'react'

export default function InputField({ label, type, placeholder, value, onChange }) {

  const validateInput = (e) => {
    const inputValue = e.target.value;
   // if REGEX for strings and numbers, no negative numbers.
   if(/^\d+$/.test(inputValue)) {
    onChange(e);
   }
  }

    
  return (
    <div className='flex flex-col mx-4'>
        <label htmlFor={label}
        className='text-stone-400 text-center'
        >{label}</label>
        <input
            type={type}
            id={label}
            placeholder={placeholder}
            value={value}
            onChange={validateInput}
            className='border border-stone-400 rounded px-2 py-1 mx-2 w-20 text-center focus:outline-none focus:border-blue-500'
        />
    </div>
  )
}
