// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], loader: true}

  componentDidMount() {
    this.getCryptoCurrencyData()
  }

  getCryptoCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const cryptoData = await response.json()
    const cryptoDataAndImages = cryptoData.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))
    this.setState({currencyList: [...cryptoDataAndImages], loader: false})
  }

  render() {
    const {currencyList, loader} = this.state
    console.log(currencyList, loader)
    return (
      <div className="main-container">
        {loader ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="crypto-details-box">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <div className="crypto-img-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
                className="crypto-img"
                alt="cryptocurrency"
              />
            </div>
            <ul className="bitcoin-data-box">
              <li className="headings-list-item">
                <p className="coin-type">Coin Type</p>
                <div className="usd-euro-headings-container">
                  <p className="usd-heading">USD</p>
                  <p className="euro-heading">EURO</p>
                </div>
              </li>
              {currencyList.map(eachItem => (
                <CryptocurrencyItem
                  key={eachItem.id}
                  currencyItems={eachItem}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
