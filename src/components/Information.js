import React, { Component } from 'react';

class Information extends Component {
  render() {
    return (
    <div className="container">
        <div className="eachSection" style={{ 'line-height': '1.5' }}>
            <h3 className="darkTitle">{this.props.title}</h3>
            <p className="informationText">{this.props.text}</p>
        </div>
    </div>
    );
  }
}

export default Information;
