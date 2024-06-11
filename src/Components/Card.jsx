import React from 'react'
//making the colur dyanamic so using this bg='bg-gray-100 
const Card = ({children, bg='bg-yellow-100'}) => {
  return (
    // making the below code dyaamic previously it was like this "div className='bg-yellow-400 rounded-[12px] p-7"
    <div className={`${bg} rounded-[12px] p-7 shadow-2xl overflow-auto`}>
      {children}
    </div>
  )
}

export default Card
