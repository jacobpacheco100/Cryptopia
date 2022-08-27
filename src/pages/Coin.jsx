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

  const unavailable = '---'

  // coin => variablesa ===================================================================
  const name = coin.name
  const icon = coin.image ? coin.image.large : null
  const abbr = coin.symbol ? coin.symbol.toUpperCase() : null

  // main stats ===================================================================

  const current_price = coin.market_data?.current_price
    ? coin.market_data.current_price.usd.toLocaleString()
    : null

  const rank = coin.market_cap_rank

  const yearly_change = coin.market_data
    ?.price_change_percentage_24h_in_currency ? (
    <>
      {coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1) ||
        `${unavailable}`}
      %
    </>
  ) : null

  const total_volume = coin.market_data?.total_volume ? (
    <>
      ${coin.market_data.total_volume.usd.toLocaleString() || `${unavailable}`}
    </>
  ) : null

  const market_cap = coin.market_data?.market_cap ? (
    <>${coin.market_data.market_cap.usd.toLocaleString() || `${unavailable}`}</>
  ) : null

  const all_time_high = coin.market_data?.ath ? (
    <>${coin.market_data.ath.usd.toLocaleString() || `${unavailable}`}</>
  ) : null

  // other stats ===================================================================

  const genesis_date = coin.genesis_date ? (
    <>{coin.genesis_date === null ? `${unavailable}` : coin.genesis_date}</>
  ) : null

  const daily_change = coin.market_data
    ?.price_change_percentage_24h_in_currency ? (
    <>
      {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
        1
      ) || `${unavailable}`}
      %
    </>
  ) : null

  const circulating_supply = coin.market_data ? (
    <>{coin.market_data.circulating_supply || `${unavailable}`}</>
  ) : null

  const max_supply = coin.market_data ? (
    <>{coin.market_data.max_supply || `${unavailable}`}</>
  ) : null

  const total_supply = coin.market_data ? (
    <>{coin.market_data.total_supply || `${unavailable}`}</>
  ) : null

  // external links ===================================================================

  const homepage = coin.links
    ? coin.links.homepage[0] || `${unavailable}`
    : null

  const forum = coin.links
    ? coin.links.official_forum_url[0] || `${unavailable}`
    : null

  const blockchain = coin.links
    ? coin.links.blockchain_site[0] || `${unavailable}`
    : null

  const github = coin.links
    ? coin.links.repos_url.github[0] || `${unavailable}`
    : null

  const reddit = coin.links
    ? coin.links.repos_url.subreddit_url || `${unavailable}`
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
            <h1 className='sub-heading'>
              {name} ( {abbr} ) Price
            </h1>
            <p className='max-w-[320px] base-text'>
              {name} live price in US Dollar (USD). View value statistics,
              market cap and supply.
            </p>
          </div>
        </div>

        {/* right */}
        <aside className='flex flex-col text-right self-end'>
          <strong>
            Change over 1 year:{' '}
            <span className='text-blue pl-2'>{yearly_change}</span>
          </strong>
          <strong>
            Current {name} Price:{' '}
            <span className='text-blue pl-2'>${current_price}</span>
          </strong>
        </aside>
      </header>

      {/* main */}
      <main className='grid md:grid-cols-2 gap-10 gap-y-28 mt-20'>
        {/* Main stats */}
        <section>
          <h1 className='sub-heading'>{name} Value Statistics</h1>
          <p className='base-text'>
            An overview showing the statistics of {name}, such as the base and
            quote currency, the rank, and trading volume.
          </p>

          <ul className='mt-5'>
            <li className='stat-box'>
              <p className='label'>Rank</p>
              <p className='stat'>#{rank}</p>
            </li>

            <li className='stat-box'>
              <p className='label'>Price to USD</p>
              <p className='stat'>${current_price}</p>
            </li>

            <li className='stat-box'>
              <p className='label'>Total Volume</p>
              <p className='stat'>{total_volume}</p>
            </li>

            <li className='stat-box'>
              <p className='label'>All Time High</p>
              <p className='stat'>{all_time_high}</p>
            </li>

            <li className='stat-box'>
              <p className='label'>Market Cap</p>
              <p className='stat'>{market_cap}</p>
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
              <p className='label'>Daily Change</p>
              <p className='stat'>{daily_change}</p>
            </li>

            <li className='stat-box'>
              <p className='label'>Started in </p>
              <p className='stat'>{genesis_date}</p>
            </li>

            <li className='stat-box'>
              <p className='label'>Max Supply</p>
              <p className='stat'>{max_supply}</p>
            </li>

            <li className='stat-box'>
              <p className='label'>Total Supply</p>
              <p className='stat'>{total_supply}</p>
            </li>

            <li className='stat-box'>
              <p className='label'>Circulating Supply</p>
              <p className='stat'>{circulating_supply}</p>
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
          <h1 className='sub-heading'>Related Links</h1>

          <ul className='mt-5'>
            {coin.links && (
              <li className='stat-box'>
                <p className='label--other'>Homepage</p>
                <a target='_blank' href={homepage} className='stat--other'>
                  {homepage}
                </a>
              </li>
            )}

            {coin.links && (
              <li className='stat-box'>
                <p className='label--other'>Forum</p>
                <a target='_blank' href={forum} className='stat--other'>
                  {forum}
                </a>
              </li>
            )}

            {coin.links && (
              <li className='stat-box'>
                <p className='label--other'>Blockchain</p>
                <a target='_blank' href={blockchain} className='stat--other'>
                  {blockchain}
                </a>
              </li>
            )}

            {coin.links && (
              <li className='stat-box'>
                <p className='label--other'>Github Repo</p>
                <a target='_blank' href={github} className='stat--other'>
                  {github}
                </a>
              </li>
            )}

            {coin.links && (
              <li className='stat-box'>
                <p className='label--other'>Reddit</p>
                <a target='_blank' href={reddit} className='stat--other'>
                  {reddit}
                </a>
              </li>
            )}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default Coin
