import React from 'react'

function ButtonPrimary({ label }: { label: string }) {
  return (
    
    <button className='bg-[#D41F13] w-full px-6 py-3 rounded-full text-white'>
        { label }
    </button>
  )
}

export default ButtonPrimary