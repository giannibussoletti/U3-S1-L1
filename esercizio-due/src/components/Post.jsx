const Post = function (props) {
  return (
    <div className="container single-post p-3 rounded-3 mb-3">
      <div className="row mb-1">
        <div className="col pe-0 d-flex">
          <img className="rounded-circle me-2" src={props.image} alt="" />
          <div className="name-date flex-grow-1">
            <p className="account-name">{props.name}</p>
            <p className="posted-date">{props.date}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="main-text">{props.text}</p>
        </div>
        <div className="row">
          <div className="col d-flex">
            <div className="me-3">
              <i className="fa-solid fa-thumbs-up"></i> {props.like}
            </div>
            <div className="comment-icon">
              <i className="fa-solid fa-comment"></i> {props.comments}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
