import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GlobalStats = () => {
  const [global, setGlobal] = useState()

  const url = 'https://api.coingecko.com/api/v3/global'

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setGlobal(res.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  // reques

  const total_currencies = global ? (
    <>{global.active_cryptocurrencies.toLocaleString()}</>
  ) : null

  const total_markets = global ? <>{global.markets}</> : null

  const total_market_cap = global ? (
    <>${global.total_market_cap.usd.toLocaleString()}</>
  ) : null

  const total_daily_volume = global ? (
    <>${global.total_volume.usd.toLocaleString()}</>
  ) : null

  const market_daily_change = global ? (
    <>{global.market_cap_change_percentage_24h_usd.toLocaleString()}%</>
  ) : null

  // market_cap_change_percentage_24h_usd

  return (
    <>
      <h1 className='mt-32 mb-10 font-bold text-lg underline'>
        Crypto Market Stats
      </h1>
      <div className='mt-14 grid sm:grid-cols-2 gap-7'>
        <div className='flex items-center justify-between p-5 rounded-md border shadow-md border-gray  hover:bg-[#fafbfb] hover:cursor-default'>
          <strong className='label'>Total Cryptocurrencies</strong>
          <strong className='stat'>{total_currencies}</strong>
        </div>

        <div className='flex items-center justify-between p-5 rounded-md border shadow-md border-gray  hover:bg-[#fafbfb] hover:cursor-default'>
          <strong className='label'>Total Market Cap</strong>
          <strong className='stat'>{total_market_cap}</strong>
        </div>

        <div className='flex items-center justify-between p-5 rounded-md border shadow-md border-gray  hover:bg-[#fafbfb] hover:cursor-default'>
          <strong className='label'>Total Markets</strong>
          <strong className=' stat stat'>{total_markets}</strong>
        </div>

        <div className='flex items-center justify-between p-5 rounded-md border shadow-md border-gray  hover:bg-[#fafbfb] hover:cursor-default'>
          <strong className='label'>Total 24th Volume</strong>
          <strong className='stat'>{total_daily_volume}</strong>
        </div>

        <div className='flex items-center justify-between p-5 rounded-md border shadow-md border-gray  hover:bg-[#fafbfb] hover:cursor-default'>
          <strong className='label'>Top Currency</strong>
          <strong className='stat'>Bitcoin</strong>
        </div>

        <div className='flex items-center justify-between p-5 rounded-md border shadow-md border-gray  hover:bg-[#fafbfb] hover:cursor-default'>
          <strong className='label'>24h Market Change</strong>
          <strong className='stat'>{market_daily_change}</strong>
        </div>
      </div>
    </>
  )
}

export default GlobalStats
