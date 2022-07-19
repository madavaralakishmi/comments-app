import './index.css'
import {Component} from 'react'
import {v4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    name: '',
    comments: '',
    commentList: [],
  }

  submitButton = event => {
    event.preventDefault()
    const {name, comments, commentList} = this.state
    const initializedColor =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    console.log(initializedColor)

    const newComment = {
      id: v4(),
      nameInput: name,
      commentInput: comments,
      date: new Date(),
      isLiked: false,
      initialColor: initializedColor,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comments: '',
    }))
  }

  onchangeInput = e => {
    const {name} = this.state
    this.setState({name: e.target.value})
  }

  onchangeComment = e => {
    const {comments} = this.state
    this.setState({comments: e.target.value})
  }

  render() {
    const {name, comments, commentList} = this.state

    return (
      <div className="bg-color">
        <h1>Comments</h1>
        <div className="item-container">
          <form onSubmit={this.submitButton}>
            <p>Say something about 4.0 Technologies</p>
            <input
              id="textInputMessage"
              type="text"
              placeholder="Your Name"
              onChange={this.onchangeInput}
              value={name}
            />
            <br />
            <textarea
              placeholder="Your Comment"
              rows="6"
              onChange={this.onchangeComment}
              value={comments}
            />
            <br />
            <button type="submit">Add Comment</button>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              alt="comments"
            />
          </div>
        </div>
        <hr />
        <p>
          <span className="bg-count-container">{commentList.length}</span>
          Comments
        </p>
        <ul>
          {commentList.map(each => (
            <CommentItem key={each.key} commentDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
