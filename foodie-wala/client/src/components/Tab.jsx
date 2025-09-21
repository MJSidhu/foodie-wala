import React from 'react'

function Tab({className='',text="Category"}) {
  return (
    <div
  className={`border-2 border-yellow-500 m-2 w-fit px-6 py-2 shadow-lg hover:bg-yellow-400 hover:text-white transition-all duration-200 ease-in-out rounded-full cursor-pointer ${className}`}
>
  <p className="text-lg font-semibold tracking-wide">{text}</p>
</div>

  )
}

export default Tab