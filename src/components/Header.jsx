import React from 'react'
import { FaCoins } from 'react-icons/fa'
import { ImNewspaper } from 'react-icons/im'
import { RiCoinsFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'

const Header = ({ scroll, search }) => {
  return (
    <>
      <div className=' w-full h-[600px] bg-blue bg-gradient-to-b from-[#59a8ff] to-blue'>
        <div className='container max-w-screen-xl mx-auto px-[20px]'>
          <img className='h-12 absolute top-10' src={logo} alt='logo' />
          {/* cta */}
          <div className='pt-[210px] flex justify-between items-center'>
            <div className='space-y-8 max-w-[500px]'>
              <p className=' leading-10 font-medium text-white text-3xl'>
                Get the latest stats on every major cryptocurrency accross the
                globe with the help of the{' '}
                <a
                  href='https://www.coingecko.com/'
                  className='font-bold text-[#9DDCFF] hover:underline'
                >
                  CoinGecko API
                </a>
              </p>

              {/* searchbar */}

              <div className=' w-full flex h-12 mt-32'>
                <input
                  className='w-full h-full p-5 bg-[#003482] focus:outline focus:outline-2 focus:outline-lightBlue text-white z-[2] rounded-md placeholder:text-[#4e73a6]'
                  type='text'
                  onChange={search}
                  placeholder='Enter a crypto Currency ( EG: Bitcoin )'
                />
              </div>
            </div>

            {/* buttons */}
            <div className='flex space-x-5'>
              <button
                onClick={scroll}
                className=' w-72 h-[320px] rounded-lg bg-gradient-to-b from-lightBlue to-blue border border-lightBlue shadow-md hover:scale-110 ease-in-out duration-[.3s]'
              >
                <div className='flex flex-col items-center space-y-3'>
                  <RiCoinsFill className='text-9xl text-white' />
                  <p className='text-white font-bold text-2xl'>
                    Crypto <br /> Currencies
                  </p>
                </div>
              </button>
              <button className=' w-72 h-[320px] rounded-lg bg-gradient-to-b from-red-400 to-red-600 border border-red-300 shadow-md hover:scale-110 ease-in-out duration-[.3s]'>
                <div className='flex flex-col items-center space-y-3'>
                  <ImNewspaper className='text-9xl text-white' />
                  <p className='text-white font-bold text-2xl'>
                    Crypto <br /> News
                  </p>
                </div>
              </button>
            </div>
          </div>
          {/* search bar */}
        </div>
      </div>
    </>
  )
}

export default Header
