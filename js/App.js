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

var App = React.createClass({
  render: function () {
    return (
      <div className = 'app'>
      News))
      <News data={my_news} />
      </div>
    );
  }
});

var News = React.createClass ({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  render: function () {
    var data = this.props.data;
    var newsTemplate;

    if (data.length > 0) {
      newsTemplate = data.map(function (item, index) {
        return (
          <div key={index}>
            <Article data={item} />
          </div>
        )
      });
    } else {
      newsTemplate = <p>Sorry news are absent!</p>
    }

    return (
      <div className = 'news'>
        {newsTemplate}
        <strong className={'news__count ' + (data.length > 0 ? '':'none')}> All news: {data.length}</strong>
      </div>
    );
  }
});

var Article = React.createClass ({
  propTypes: {
    data: React.PropTypes.shape({
      author: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      bigText: React.PropTypes.string.isRequired
    })
  },

  getInitialState: function () {
    return {
      visible: false
    };
  },

  readMoreClick: function (e) {
    e.preventDefault();
    this.setState({visible: true});
  },

  render: function () {
    var author = this.props.data.author,
        text = this.props.data.text,
        bigText = this.props.data.bigText,
        visible = this.state.visible;
    return (
      <div className="article">
        <p className="news_author">{author}:</p>
        <p className="news_text">{text}</p>
        <a href="#" onClick={this.readMoreClick} className={"news_readmore " + (visible ? 'none': '' )}>More</a>
        <p className={"news_bigText " + (visible ? '': 'none')}>{bigText}</p>
      </div>

    )
  }
})


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
