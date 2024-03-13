import {Component} from 'react'
import './index.css'

class EditText extends Component {
  state = {inputText: '', flag: false}

  HandleWords = event => {
    this.setState({inputText: event.target.value})
  }

  changeBtn = () => {
    this.setState({flag: true})
  }

  noTextBtn = () => {
    this.setState({flag: false})
  }

  render() {
    const {inputText, flag} = this.state
    const fieldInput = flag ? '' : inputText
    const displayText = flag ? inputText : ''

    const hideField = flag ? 'hide-field' : ' '

    return (
      <div className="app-container">
        <div className="text-editor-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="btn-text-container">
            <input
              type="text"
              value={fieldInput}
              className={`field ${hideField}`}
              onChange={this.HandleWords}
            />
            {flag ? (
              <div className="result-container">
                <p className="text">{displayText}</p>
                <button
                  type="button"
                  className="button"
                  onClick={this.noTextBtn}
                >
                  Edit
                </button>
              </div>
            ) : (
              <button type="button" className="button" onClick={this.changeBtn}>
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EditText
