import React, { Component } from "react";
import NewComponent from './Components/NewComponent.component'

class App extends Component {
  render() {
    return (
      <div className="test-border">
        hello i am class base component
        <NewComponent />
      </div>
    )
  }
}

export default App;
