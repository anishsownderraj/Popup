import React, { Component } from 'react';
import "./Popup.css"

class Popup extends Component{

render() {
  return(
    <div className="modal-wrapper">
        <div className="modal-header">
        <p>Be the first to know when AiTudier Beta V1 comes out!</p>
        <span className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h4>Modal</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, placeat aliquam? Nostrum vero fugiat rem, itaque molestias ipsa quae facilis.</p>
        </div>
        <div className="modal-footer">
          <button  className="btn-cancel">Close</button>
        </div>
      </div>
    </div>
    );
  }
}

export default Popup;