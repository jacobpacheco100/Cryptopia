import React from 'react'
import Coin from './Coin'

const Coins = (props) => {
  const list = props.props.map((coin) => {
    return (
      <Coin
        name={coin.name}
        icon={coin.image}
        price={coin.current_price}
        marketCap={coin.market_cap}
        dailyChange={coin.price_change_percentage_24h}
      />
    )
  })

  return <div className='mt-20 grid grid-cols-3 gap-5'>{list}</div>
}

export default Coins
