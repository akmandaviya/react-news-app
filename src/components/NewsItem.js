import React, { Component } from "react";

export class NewsItem extends Component {
  

  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props
    return (
      <div className="my-3">
        <div className="card" >
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1", left:"75%"}}>{source} </span>
          <img src= {!imageUrl?"https://poster.keepcalmandposters.com/default/5983147_keep_calm_very_exciting_news_coming_soon.png":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}
           </h5>
            <p className="card-text">
             {description}
            </p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author}, On {new Date(date).toGMTString()}</small></p>

            <a rel="noopener noreferrer" href={newsUrl}  target="_blank" className="btn btn-sm btn-dark">
              Read more..
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
