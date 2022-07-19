import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails} = props
  const {nameInput, commentInput, date, initialColor} = commentDetails

  const dateInMinute = formatDistanceToNow(date)
  return (
    <div className="merge">
      <div className={`width ${initialColor}`}>
        <p>{nameInput[0].toUpperCase()}</p>
      </div>
      <div>
        <div className="nameContainer">
          <p className="p">{nameInput}</p>
          <p className="time">{dateInMinute} ago</p>
        </div>
        <p>{commentInput}</p>
      </div>
    </div>
  )
}

export default CommentItem
