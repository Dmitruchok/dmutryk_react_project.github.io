import React from 'react';


var my_news = [
  {
    author: 'Andriy',
    text: 'Hi, my name is Andriy Dmytruk',
    bigText: 'I was born in small city and relocated in big city Kyiv'
  },
  {
    author: 'Sergiy',
    text: 'Hi, i read this text!!',
    bigText: 'I was born in big city Kyiv'
  },
  {
    author: 'Adolf',
    text: 'Download free - http://localhost:3000',
    bigText: 'I live in small city and like this))))'
  }
];



var News = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },
  getInitialState: function() {
    return {
      counter: 0
    }
  },
  render: function() {
    var data = this.props.data;
    var newsTemplate;

    if (data.length > 0) {
      newsTemplate = data.map(function(item, index) {
        return (
          <div key={index}>
            <Article data={item} />
          </div>
        )
      })
    } else {
      newsTemplate = <p>К сожалению новостей нет</p>
    }

    return (
      <div className='news'>
        {newsTemplate}
        <strong
          className={'news__count ' + (data.length > 0 ? '':'none') }>Всего новостей: {data.length}</strong>
      </div>
    );
  }
});

exports default News;
