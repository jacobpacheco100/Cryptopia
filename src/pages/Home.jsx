import React, { useState, useRef } from 'react'
import Header from '../components/Header'
import GlobalStats from '../components/GlobalStats'
import Coins from '../components/Coins'

const Home = ({ api }) => {
  const currencies = useRef(null)
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }

  // search bar
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <Header
        scroll={() => scrollToSection(currencies)}
        search={(e) => setSearchTerm(e.target.value)}
      />
      <div className='container max-w-screen-xl mx-auto px-[20px]'>
        <GlobalStats />
        <div ref={currencies}>
          <Coins props={api} />
        </div>
      </div>
    </>
  )
}

export default Home
