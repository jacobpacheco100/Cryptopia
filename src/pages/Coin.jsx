import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import DOMPurify from 'dompurify'

// icons
import { FaCoins } from 'react-icons/fa'

const Coin = () => {
  const params = useParams()

  const [coin, setCoin] = useState({})
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  // coin => variables
  const name = coin.name
  const icon = coin.image ? coin.image.large : null

  const current_price = coin.market_data?.current_price
    ? coin.market_data.current_price.usd.toLocaleString()
    : null

  return (
    <div className='container max-w-screen-xl mx-auto px-[20px]'>
      {/* navbar : link to home */}
      <Link to='/' className='flex space-x-3 items-center h-32 max-w-[170px]'>
        <FaCoins className='text-[32px] text-blue' />
        <strong className='text-xl'>Cryptopia</strong>
      </Link>

      {/* Header */}
      <header className='flex justify-between  mt-20 pb-20 border-b-2 border-gray'>
        {/* left */}
        <div className='flex space-x-8'>
          <img src={`${icon}`} alt='coin-icon' className=' w-24 h-24' />
          <div className='space-y-4'>
            <h1 className='sub-heading'>Bitcoin ( BTC ) Price</h1>
            <p className='max-w-[320px] base-text'>
              Bitcoin live price in US Dollar (USD). View value statistics,
              market cap and supply.
            </p>
          </div>
        </div>

        {/* right */}
        <aside className='flex flex-col text-right self-end'>
          <strong>
            Change: <span className='text-blue'>-0.31%</span>
          </strong>
          <strong>
            Current Bitcoin Price: <span className='text-blue'>$ 21.5K</span>
          </strong>
        </aside>
      </header>

      {/* main */}
      <main className='grid md:grid-cols-2 gap-10 gap-y-28 mt-20'>
        {/* Main stats */}
        <section>
          <h1 className='sub-heading'>{name} Value Statistics</h1>
          <p className='base-text'>
            An overview showing the statistics of Bitcoin, such as the base and
            quote currency, the rank, and trading volume.
          </p>

          <ul className='mt-5'>
            <li className='stat-box'>
              <p className='label'>Price to USD</p>
              <p className='stat'>${current_price}</p>
            </li>

            <li className='stat-box'>
              <p className='label'>Rank</p>
              <p className='stat'>$ 21.6K</p>
            </li>

            <li className='stat-box'>
              <p className='label'>24h Volume</p>
              <p className='stat'>$ 21.6K</p>
            </li>

            <li className='stat-box'>
              <p className='label'>Market Cap</p>
              <p className='stat'>$ 21.6K</p>
            </li>

            <li className='stat-box'>
              <p className='label'>All Time High</p>
              <p className='stat'>$ 21.6K</p>
            </li>
          </ul>
        </section>

        {/* Other stats */}
        <section>
          <h1 className='sub-heading'>Other Info</h1>
          <p className='base-text'>
            Other minor statistics such as number of exchanges and markets, as
            well as stats on supply ammount and circulation
          </p>

          <ul className='mt-5'>
            <li className='stat-box'>
              <p className='label'>Number Of Markets</p>
              <p className='stat'>${current_price}</p>
            </li>

            <li className='stat-box'>
              <p className='label'>Number Of Exchanges</p>
              <p className='stat'>$ 21.6K</p>
            </li>

            <li className='stat-box'>
              <p className='label'>Aprroved Supply</p>
              <p className='stat'>$ 21.6K</p>
            </li>

            <li className='stat-box'>
              <p className='label'>Total Supply</p>
              <p className='stat'>$ 21.6K</p>
            </li>

            <li className='stat-box'>
              <p className='label'>Circulating Supply</p>
              <p className='stat'>$ 21.6K</p>
            </li>
          </ul>
        </section>

        {/* About */}
        <section>
          <h1 className='sub-heading'>What is {name}?</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                coin.description ? coin.description.en : ''
              ),
            }}
            className='base-text pr-10'
          ></p>
        </section>

        {/* Coin Links */}
        <section>
          <h1 className='sub-heading'>{name} Links</h1>

          <ul className='mt-5'>
            <li className='stat-box'>
              <p className='label--other'>Price to USD</p>
              <a href={''} className='stat--other'>
                ${current_price}
              </a>
            </li>

            <li className='stat-box'>
              <p className='label--other'>Rank</p>
              <a href={''} className='stat--other'>
                $ 21.6K
              </a>
            </li>

            <li className='stat-box'>
              <p className='label--other'>24h Volume</p>
              <a href={''} className='stat--other'>
                $ 21.6K
              </a>
            </li>

            <li className='stat-box'>
              <p className='label--other'>Market Cap</p>
              <a href={''} className='stat--other'>
                $ 21.6K
              </a>
            </li>

            <li className='stat-box'>
              <p className='label--other'>All Time High</p>
              <a href={''} className='stat--other'>
                $ 21.6K
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default Coin
