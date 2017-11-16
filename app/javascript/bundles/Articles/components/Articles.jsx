import PropTypes from 'prop-types';
import React from 'react';

export default class Articles extends React.Component {
  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    this.state = {articles: this.props.articles};

  }
  render() {
    var articles = this.state.articles.map( (item,index) => {
      return (<div key={item.id}><h1>{item.title}</h1><h4>{item.author}</h4><p>{item.description}</p></div>)
    })
    return (
      <div>
      {articles}
      </div>
    );
  }
}
