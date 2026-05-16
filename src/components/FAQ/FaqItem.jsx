import React, { useState } from 'react'

const FaqItem = ({question, answer}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className='border-b border-gray-200'>
        <button
            onClick={() => setIsOpen(prev => !prev)}
            className='w-full flex justify-between items-center px-2 py-4'
        >
            <span className='font-medium text-gray-800'>{question}</span>
            <span className='ml-2 text-gray-500'>{isOpen ? "-" : "+"}</span>
        </button>

        <article className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}>
            <p className='text-gray-600 px-2 pb-4'>{answer}</p>
        </article>
    </article>
  )
}

export default FaqItem