import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv1 from 'uuid'
import { addArticle, currentUser } from '../js/actions/index'

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article)),
    currentUser: article => dispatch(currentUser(article))
  }
}

class ConnectedForm extends Component {
  constructor() {
    super()
    this.state = ''
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = event => {
    console.log(event.target.id)
    return this.setState({ [event.target.id]: event.target.value })
  }
  handleSubmit = event => {
    event.preventDefault()
    const { title } = this.state
    const { username } = this.state
    const id = uuidv1()
    this.props.addArticle({ title, id })
    console.log(this.props)
    this.props.currentUser({ username, id })
    this.setState({ title: '' })
    this.setState({ username: '' })
  }

  render() {
    const { title, username } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />

          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            placeholder="Username"
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    )
  }
}
const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm)
export default Form
