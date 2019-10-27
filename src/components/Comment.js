import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <div>
        <label htmlFor="comment"></label>
        <textarea name="comment" id="comment" cols="90" rows="5"></textarea>
        <button className="btn btn-warning"> Post Comment </button>
      </div>
    );
  }
}

export default Comment;