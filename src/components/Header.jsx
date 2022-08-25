import React from 'react'
import { FaCoins } from 'react-icons/fa'

const Header = () => {
  return (
    <>
      <div className='flex flex-col  sm:flex-row sm:space-x-8 items-start mt-32'>
        <FaCoins className='text-[110px] text-blue mb-5' />
        <div>
          <h1 className='text-4xl font-bold mb-3'>Cryptopia</h1>
          <p className='font-medium text-slateText max-w-[400px] leading-7'>
            Get the latest stats on every major cryptocurrency accross the globe
            with the help of the{' '}
            <a
              href='https://www.coingecko.com/'
              className='font-bold text-blue hover:underline'
            >
              CoinGecko API
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Header
