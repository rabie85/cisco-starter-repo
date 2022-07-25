import React from 'react'

function Widget({title,children}) {
  return (
    <div className='widget'>
        {title && <div className='widget-header'>{title}</div>}
       <div className='widget-body'>{children}</div>
    </div>
  )
}

export default Widget