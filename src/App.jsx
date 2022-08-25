import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'

// pages
import Home from './pages/Home'

function App() {
  const [coins, setCoins] = useState([])

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false'

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
      <Router>
        <Routes>
          <Route path='/' element={<Home api={coins} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
