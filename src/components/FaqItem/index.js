// Write your code here.
import './index.css'

const FaqItem = props => {
  const {eachOne, onClickFaq} = props
  const {id, questionText, answerText, isAnswer} = eachOne

  const ans = isAnswer ? <p className="answer">{answerText}</p> : ''

  const plusOrMinus = isAnswer ? (
    <img
      src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png "
      alt="minus"
    />
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png "
      alt="plus"
    />
  )

  const onFaqClick = () => {
    onClickFaq(id)
  }

  return (
    <li className="listItem">
      <div className="divContainer">
        <h1 className="question">{questionText}</h1>
        <button type="button" className="button" onClick={onFaqClick}>
          {plusOrMinus}
        </button>
      </div>
      {ans}
    </li>
  )
}

export default FaqItem
