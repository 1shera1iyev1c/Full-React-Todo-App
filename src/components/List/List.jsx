import React from 'react'

export function List({children}) {
  return (
    <ul className='list-unstyled p-0'>
        {children}
    </ul>
  )
}
