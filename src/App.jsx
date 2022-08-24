import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Header from './components/Header'
import GlobalStats from './components/GlobalStats'
import Coins from './components/Coins'

function App() {
  const [coins, setCoins] = useState([])

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'

  // TEST API
  axios.get(url).then((res) => {
    console.log(res.data)
  })

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <div className='container max-w-screen-xl mx-auto px-[20px]'>
        <Header />
        <GlobalStats />
        <Coins props={coins} />
      </div>
    </>
  )
}

export default App
