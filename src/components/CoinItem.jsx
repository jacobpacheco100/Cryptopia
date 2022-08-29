import React from 'react'

const Coin = ({ name, icon, price, marketCap, dailyChange }) => {
  return (
    <div className='flex flex-col p-5 rounded-md border shadow-md border-gray hover:border-slate hover:bg-[#fafbfb] hover:cursor-pointer'>
      <div className='flex items-center justify-between border-b border-gray w-full pb-5'>
        <strong className='text-lg'>{name}</strong>
        <img src={icon} alt='icon' className='w-10 h-10 rounded-full' />
      </div>
      <div className='flex flex-col space-y-3 pt-5 text-slateText'>
        <p>
          Price :{' '}
          <span className='font-bold text-black'>
            ${price.toLocaleString()}
          </span>
        </p>
        <p>
          Market Cap :{' '}
          <span className='font-bold text-black'>
            ${marketCap.toLocaleString()}
          </span>
        </p>
        <p>
          Daily Change :{' '}
          <span className='font-bold text-black'>
            {dailyChange.toLocaleString()}%
          </span>
        </p>
      </div>
    </div>
  )
}

export default Coin
