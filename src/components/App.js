import React, {Component} from 'react';
import Popup from "./Popup";

class App extends Component{

  state={show:false}

  showHandler = (e) => {
    this.setState({show: !this.state.show})

  }

  render() {
    return(
      <div>

        <Popup />
      </div>
    );
  }
}

export default App;