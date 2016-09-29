import React from 'react';
import {Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

var Photo = React.createClass({
  render: function() {
    const { post, i, comments } = this.props;
    return(
        <figure className="well lim col-md-3">
        <Link to="single">
            <img src={post.display_src} alt={post.caption} className="imgs img-responsive" />
        </Link>

        {/*<CSSTransitionGroup transitionName="like"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        <span key={post.likes} className="btn btn-default">{post.likes}</span>
        </CSSTransitionGroup>*/}
        <hr/>
          <figcaption>
            <p>{post.caption}</p>
            <div>
              <button onClick={this.props.increment.bind(null, i)} className="btn btn-md btn-default">&hearts; {post.likes}</button>
              <Link to="single">
                <span className="btn btn-md btn-default pull-right">
                  {comments[post.code] ? comments[post.code].length : 0 } comments
                </span>
              </Link>
              </div>
          </figcaption>
      </figure>
    );
  }
});


export default Photo;
