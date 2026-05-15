import React from 'react'

const Breadcrumb = () => {
  return (
    <article className='flex justify-start items-center gap-2'>
      <p className='cursor-pointer'>Home</p>
      <p>&gt;</p>
      <p className='cursor-pointer'>Internships</p>
    </article>
  )
}

export default Breadcrumb