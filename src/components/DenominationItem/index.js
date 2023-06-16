// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denomination, amountWithdraw} = props
  const {value} = denomination

  const withdrawalAmount = () => {
    amountWithdraw(value)
  }

  return (
    <li>
      <button type="button" className="button" onClick={withdrawalAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
