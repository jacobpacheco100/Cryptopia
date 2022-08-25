import React from 'react'
import CoinItem from './CoinItem'

const Coins = (props) => {
  const list = props.props.map((coin) => {
    return (
      <CoinItem
        name={coin.name}
        icon={coin.image}
        price={coin.current_price}
        marketCap={coin.market_cap}
        dailyChange={coin.price_change_percentage_24h}
      />
    )
  })

  return (
    <>
      <h1 className='mt-32 mb-10 font-bold text-lg underline'>
        Cryptocurrencies
      </h1>
      <div className=' grid grid-cols-3 gap-10'>{list}</div>
    </>
  )
}

export default Coins
