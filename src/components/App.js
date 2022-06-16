import React, {Component} from 'react';
import Popup from "./Popup";
import SignIn from "./SignIn";

class App extends Component{

  state={show:false}

  showHandler = (e) => {
    this.setState({show: !this.state.show})

  }

  render() {
    return(
      <div>
        <SignIn/>

        {/* <Popup /> */}
      </div>
    );
  }
}

export default App;