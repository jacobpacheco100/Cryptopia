import React from 'react'

const GlobalStats = () => {
  return (
    <div className='mt-14 grid sm:grid-cols-2 gap-7'>
      <div className='flex items-center justify-between p-5 rounded-md border-2 border-gray'>
        <strong>Total Cryptocurrencies</strong>
        <strong className='font-bold text-blue text-2xl'>12,150</strong>
      </div>

      <div className='flex items-center justify-between p-5 rounded-md border-2 border-gray'>
        <strong>Total Market Cap</strong>
        <strong className='font-bold text-blue text-2xl'>12,150</strong>
      </div>

      <div className='flex items-center justify-between p-5 rounded-md border-2 border-gray'>
        <strong>Total Markets</strong>
        <strong className='font-bold text-blue text-2xl'>12,150</strong>
      </div>

      <div className='flex items-center justify-between p-5 rounded-md border-2 border-gray'>
        <strong>Total Exchanges</strong>
        <strong className='font-bold text-blue text-2xl'>12,150</strong>
      </div>

      <div className='flex items-center justify-between p-5 rounded-md border-2 border-gray'>
        <strong>Total 24th Volume</strong>
        <strong className='font-bold text-blue text-2xl'>12,150</strong>
      </div>

      <div className='flex items-center justify-between p-5 rounded-md border-2 border-gray'>
        <strong>Top Currency</strong>
        <strong className='font-bold text-blue text-2xl'>12,150</strong>
      </div>
    </div>
  )
}

export default GlobalStats
