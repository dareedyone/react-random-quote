function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "getRandomQuotes",














    event => {

      let randomNum = Math.round(Math.random() * 4);
      this.setState({
        randomQuote: this.state.quotes[randomNum] });


    });_defineProperty(this, "doTest",
    () => {
      console.log("yeaaa");
    });this.state = { quotes: [{ Quote: 'A writer is someone for whom writing is more difficult than it is for other people.', author: 'Thomas Mann' }, { Quote: 'Quiet people have the loudest minds.', author: 'Steven King' }, { Quote: 'Which is the true nightmare, the horrific dream that you have in your sleep or the dissatisfied reality that awaits you when you awake?', author: 'Justin Alcala' }, { Quote: 'Stay Hungry. Stay Foolish.', author: 'Steve Jobs' }, { Quote: 'What I like in a good author is not what he says, but what he whispers', author: 'Logan Pearshall' }], randomQuote: { Quote: "loading", author: "loading-author" } };}
  componentDidMount() {
    this.getRandomQuotes();
    console.log("componentDidMounthere");
  }

  render() {
    // console.log('test');
    return (
      React.createElement("div", { className: "bg-light contain rounded w-50 p-1 px-3" },
      React.createElement("h2", { id: "text", className: "text-center" }, this.state.randomQuote.Quote),
      React.createElement("h6", { id: "author", className: "text-right my-4" }, "-", this.state.randomQuote.author),
      React.createElement("div", { className: "d-flex justify-content-between" },
      React.createElement("a", { target: "_blank", className: "btn btn-secondary", id: "tweet-quote", href: `https://twitter.com/intent/tweet?text=${this.state.randomQuote.Quote} By ${this.state.randomQuote.author}` }, "tweet"),
      React.createElement("button", { id: "new-quote", onClick: this.getRandomQuotes, className: "btn btn-secondary" }, "New Quote"))));




  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("quote-box"));