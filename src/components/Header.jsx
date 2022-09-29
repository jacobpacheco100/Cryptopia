import React from 'react'
import { FaCoins } from 'react-icons/fa'
import { ImNewspaper } from 'react-icons/im'
import { RiCoinsFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'

const Header = ({ scroll, search }) => {
  return (
    <>
      <div className=' w-full  pb-20'>
        <div className='container max-w-screen-xl mx-auto px-[20px]'>
          {/* cta */}
          <div className='mt-[150px] mx-auto flex flex-col justify-between items-center'>
            <div className='space-y-12'>
              <div className='space-y-8'>
                <h1 className=' text-3xl lg:text-5xl text-center font-bold text-blue'>
                  Find stats on cryptocurrencies, with Cryptopia.
                </h1>
                <p className='max-w-[400px] text-slateText mx-auto leading-7 font-medium text-h4 text-sm text-center '>
                  Get the latest stats on every major cryptocurrency accross the
                  globe with the a of the{' '}
                  <a
                    href='https://www.coingecko.com/'
                    className='font-bold text-lightBlue hover:underline'
                  >
                    CoinGecko API
                  </a>
                </p>
              </div>

              {/* searchbar */}
              <div className='w-full flex h-8 mx-auto w-80% max-w-[700px] mt-10'>
                <input
                  className='w-full h-full p-5 outline outline-slate focus:outline focus:outline-2 focus:outline-lightBlue  text-slate z-[2] rounded-md placeholder:text-slate'
                  type='text'
                  onChange={search}
                  placeholder='Enter a crypto Currency ( EG: Bitcoin )'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
