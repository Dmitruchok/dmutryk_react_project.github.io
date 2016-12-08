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
      <h3>News))</h3>
      <Add />
      <News data={my_news} />
      </div>
    );
  }
});

var News = React.createClass ({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  getInitialState: function() {
    return {
      counter: 0
    }
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
});

var Add = React.createClass({

  getInitialState: function () {
    return {
      agreeNotChecked: true,
      authorIsEmpty: true,
      textIsEmpty: true
    };
  },

  componentDidMount: function () {
    ReactDOM.findDOMNode(this.refs.author).focus();
  },

  onChangeHandler: function (e) {
    e.preventDefault();
    var author = ReactDOM.findDOMNode(this.refs.author).value;
    var text = ReactDOM.findDOMNode(this.refs.text).value;
    alert(author + '\n' + text);
  },

  onCheckRuleClick: function (e) {
    this.setState({agreeNotChecked: !this.state.agreeNotChecked});
  },

  onAuthorChange: function (e) {
    if (e.target.value.trim().length > 0) {
      this.setState({authorIsEmpty: false})
    } else {
      this.setState({authorIsEmpty: true})
    }
  },

  onTextChange: function (e) {
    if (e.target.value.trim().length > 0) {
      this.setState({textIsEmpty: false})
    } else {
      this.setState({textIsEmpty: true})
    }
  },

  onFiledChange: function (fildName, e) {
    if (e.target.value.trim().length > 0) {
      this.setState({[''+fildName]: false})
    } else {
      this.setState({[''+fildName]: true})
    }
  },

  render: function () {
    var agreeNotChecked = this.state.agreeNotChecked,
          authorIsEmpty = this.state.authorIsEmpty,
          textIsEmpty = this.state.textIsEmpty;

    return (
      <form className="add new">
        <input tepe="text"
        className="add_author"
        onChange={this.onFiledChange.bind(this, 'authorIsEmpty')}
        placeholder="Your name"
        ref='author'
         />

         <textarea className="add_text"
        onChange={this.onFiledChange.bind(this, 'textIsEmpty')}
         placeholder='Text news'
         ref='text'>
         </textarea>

         <label className="add_checkrule">
          <input type="checkbox" defaultChecked={false} ref="chekrule" onChange={this.onCheckRuleClick} /> I agree with rules
         </label>
         <button
         className="add_btn"
         onClick={this.onChangeHandler}
         ref="alert_button"
         disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}
         >Send</button>
        </form>
    );
  }
});




ReactDOM.render(
  <App />,
  document.getElementById('root')
);
