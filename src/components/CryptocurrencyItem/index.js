// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {currencyItems} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = currencyItems

  return (
    <li className="currency-item-container">
      <div className="logo-img-name">
        <img src={currencyLogo} className="logo" alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="euro-usd-values">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
