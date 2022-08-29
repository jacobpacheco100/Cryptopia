import React from 'react'
import CoinItem from './CoinItem'
import { Link } from 'react-router-dom'
import Coin from '../pages/Coin'

const Coins = ({ api, filter }) => {
  const list = api
    .filter((coin) => {
      if (filter === '') {
        return coin
      } else if (coin.name.toLowerCase().includes(filter.toLowerCase())) {
        return coin
      }
    })
    .map((coin) => {
      return (
        <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
          <CoinItem
            name={coin.name}
            icon={coin.image}
            price={coin.current_price}
            marketCap={coin.market_cap}
            dailyChange={coin.price_change_percentage_24h}
          />
        </Link>
      )
    })

  return (
    <>
      <h1
        className={`${
          filter === '' ? 'mt-32' : 'mt-10'
        } mb-10 font-bold text-lg underline`}
      >
        Cryptocurrencies
      </h1>
      <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-10'>{list}</div>
    </>
  )
}

export default Coins
