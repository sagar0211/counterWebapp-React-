import React, {Component} from 'react';

import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      count :0 
    }
  }

  increment =() => {
    this.setState({count: this.state.count + 1})
  }

  decrement =() => {
    this.setState({count: this.state.count - 1})
  }
    render(){
    return (
      <div className="App">
        <>
          <header className="head">Welcome To Counter</header>

          <div className="tab">
            <br/>
            <button onClick={this.increment} className="counter">Increment</button>
            <h1 className="show">{this.state.count}</h1>
            <button onClick={this.decrement} className="counter">Decrement</button>
            <br />
            <footer className="foot">Thank you for using Counter</footer>
          </div>
        </>
  
      </div>
    )

  }
  
}

export default App;
