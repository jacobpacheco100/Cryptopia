import React from 'react'
import Header from '../components/Header'
import GlobalStats from '../components/GlobalStats'
import Coins from '../components/Coins'

const Home = ({ api }) => {
  return (
    <div className='container max-w-screen-xl mx-auto px-[20px]'>
      <Header />
      <GlobalStats />
      <Coins props={api} />
    </div>
  )
}

export default Home
