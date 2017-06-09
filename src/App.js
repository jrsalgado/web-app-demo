import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// vote route
// request http://localhost:3101/vote?id=[idfoto]
// response { id : voto , ...}

class App extends Component {

  _handleClickImg(id) {
    console.log({id})
  }

  render() {
    let styles = {
      img: {width:'30%', height:'100%', cursor:'pointer', objectFit: 'cover'}
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://media.giphy.com/media/2aDXYxDMtfeWA/giphy.gif" className="App-logo" alt="logo" />
          <h2>Kitten Vote App</h2>
        </div>
        <p className="App-intro">
          Click on the cuttest kitten to vote
        </p>
        <div style={{ display: 'flex', alignItems:'center', flexDirection: 'column', justifyContent:'space-around', height:'400px', width: '100%'}} >
          <div style={{display:'flex', justifyContent:'space-around', width:'80%', height:'30%'}}>
            <img onClick={this._handleClickImg('102mqDgAb4Kfug') } style={styles.img} src="https://media.giphy.com/media/102mqDgAb4Kfug/giphy.gif" />
            <img style={styles.img} src="https://media.giphy.com/media/FRg1FUARsn96/giphy.gif" />
            <img style={styles.img} src="https://media.giphy.com/media/gyRWkLSQVqlPi/giphy.gif"/>
          </div>
          <div style={{display:'flex', justifyContent:'space-around', width:'80%', height:'30%'}}>
            <img style={styles.img} src="https://media.giphy.com/media/uuocoePH1mkVy/giphy.gif" />
            <img style={styles.img} src="https://media.giphy.com/media/X3Yj4XXXieKYM/giphy.gif" />
            <img style={styles.img} src="https://media.giphy.com/media/mzU2vvqm0wdr2/giphy.gif"/>
          </div>
          <div style={{display:'flex', justifyContent:'space-around', width:'80%', height:'30%'}}>
            <img style={styles.img} src="https://media.giphy.com/media/11kXFNRcZBFgwo/giphy.gif" />
            <img style={styles.img} src="https://media.giphy.com/media/BgnKc6mLmE8tq/giphy.gif" />
            <img style={styles.img} src="https://media.giphy.com/media/njtPBlbYnHAHK/giphy.gif"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
