import {Component} from 'react'
// import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const initialBackgroundColorClassName = `initial-container ${
  initialContainerBackgroundClassNames[
    Math.ceil(Math.random() * initialContainerBackgroundClassNames.length - 1)
  ]
}`
class Comments extends Component {
  state = {
    commentsList: [
      {
        id: 1,
        name: 'imran',
        comment: 'Hi this is imran.',
        date: new Date(),
        isLiked: false,
        initialClassName: initialBackgroundColorClassName,
      },
      {
        id: 2,
        name: 'imran',
        comment: 'Hi this is imran.',
        date: new Date(),
        isLiked: false,
        initialClassName: initialBackgroundColorClassName,
      },
      {
        id: 3,
        name: 'imran',
        comment: 'Hi this is imran.',
        date: new Date(),
        isLiked: false,
        initialClassName: initialBackgroundColorClassName,
      },
    ],
  }

  /* deleteComment = commentId => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== commentId),
    })
  } */

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  renderCommentsList = () => {
    const {commentsList} = this.state

    return commentsList.map(eachComment => (
      <CommentItem
        key={eachComment.id}
        commentDetails={eachComment}
        toggleIsLiked={this.toggleIsLiked}
        deleteComment={this.deleteComment}
      />
    ))
  }

  /* onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  /* onChangeCommentInput = event => {
    this.setState({
      commentInput: event.target.value,
    })
  }

  onChangeNameInput = event => {
    this.setState({
      nameInput: event.target.value,
    })
  } */

  render() {
    // const {nameInput, commentInput, commentsList} = this.state

    return (
      <div className="app-container">
        <div className="comments-container">
          <h1 className="app-heading">My Posts</h1>

          <ul className="comments-list">{this.renderCommentsList()}</ul>
        </div>
      </div>
    )
  }
}

export default Comments
