// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem/index'

const faqsList = [
  {
    id: 0,
    questionText: 'What is IRC?',
    answerText:
      'IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.',
    isAnswer: false,
  },
  {
    id: 1,
    questionText: 'What is the medium of instruction?',
    answerText:
      'The courses would be delivered in English and Telugu. The program will be available in more vernacular languages soon.',
    isAnswer: false,
  },
  {
    id: 2,
    questionText:
      'Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?',
    answerText:
      'Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information.',
    isAnswer: false,
  },
  {
    id: 3,
    questionText: 'How will my doubts be cleared? What is the mechanism?',
    answerText:
      'You can ask your doubts in the discussions section and course mentor will answer them. You can also see the doubts asked by other students.',
    isAnswer: false,
  },
]

class Faqs extends Component {
  state = {newFaqList: faqsList}

  onClickFaq = id => {
    this.setState(prevState => ({
      newFaqList: prevState.newFaqList.map(eachOne => {
        if (eachOne.id === id) {
          return {...eachOne, isAnswer: !eachOne.isAnswer}
        }
        return eachOne
      }),
    }))
  }

  render() {
    const {newFaqList} = this.state
    return (
      <div className="mainContainer">
        <div className="cardContainer">
          <div className="card">
            <h1 className="faqsHeader">FAQs</h1>
            <ul className="faq-Unorder-List">
              {newFaqList.map(eachOne => (
                <FaqItem
                  key={eachOne.id}
                  eachOne={eachOne}
                  onClickFaq={this.onClickFaq}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Faqs
