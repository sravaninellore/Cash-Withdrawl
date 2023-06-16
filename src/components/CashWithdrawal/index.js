// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {totalAmount: 2000, isThereAmount: true}

  amountWithdraw = amount => {
    const {totalAmount} = this.state
    const currentAmount = totalAmount - amount
    if (currentAmount < 0) {
      this.setState({isThereAmount: false})
    }
    this.setState({totalAmount: currentAmount})
  }

  render() {
    const {denominationsList} = this.props

    const {totalAmount, isThereAmount} = this.state

    const errorMessage = isThereAmount
      ? null
      : 'Your account has insufficient balance!'

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-container">
            <p className="starting-letter">S</p>
            <p className="profile-name">Sarah Williams</p>
          </div>
          {isThereAmount && (
            <div className="balance-container">
              <p className="balance-heading">Your Balance</p>
              <div className="price-currency">
                <p className="price">{totalAmount}</p>
                <p className="currency">In Rupees</p>
              </div>
            </div>
          )}
          {!isThereAmount && <p className="error-msg">{errorMessage}</p>}
          <p className="withdraw-heading">Withdraw</p>
          <p className="choose-option">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denomination={eachDenomination}
                amountWithdraw={this.amountWithdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
