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
    console.log("New");
    var articles_data = JSON.parse(this.state.articles);
    console.log(articles_data);
    var articles = articles_data.map( (item,index) => {
    var article_tags = item.tags;
      return (<div className="content" id={item.id} key={item.id}><h1>{item.title}</h1><h4>{item.author.name}</h4><p>{item.description}</p><footer><p>Tags: {article_tags.map((t,index) => { return <li key={t.id}>{t.name}</li>})}</p><a href="#top">Top</a></footer></div>)
    });
    var list = articles_data.map( (item,index) => {
      return (<li key={item.id}><a href={"#"+item.id}>{item.title}</a></li>)
    });
    return (
      <div id="top">
        <aside>
          <ul>{list}</ul>
        </aside>
      {articles}
      </div>
    );

  }
}
