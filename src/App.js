import React, { Component } from 'react';
import './App.css';
import superagent from 'superagent';

class App extends Component {
  constructor() {
    super()
    this.state={
      modal: false
    }
  }
  _handleClickImg(evt) {
    const _this = this
    const src = evt.currentTarget.currentSrc
    const kittenId = src.replace('https://media.giphy.com/media/','').replace('/giphy.gif','');
    superagent
      .get('http://localhost:3101/vote/?kittenId=' + kittenId)
      .end(function (err, res) {
        if (err) return console.log(err)
        _this.setState({ modal: true })
        setTimeout(() => {
          _this.setState({modal: false})
        }, 10000)

      });
  }

  render() {
    let styles = {
      img: { width: '30%', height: '30%', cursor: 'pointer', objectFit: 'cover' }
    }
    let kittens = [
      '102mqDgAb4Kfug',
      'FRg1FUARsn96',
      'gyRWkLSQVqlPi',
      'uuocoePH1mkVy',
      'X3Yj4XXXieKYM',
      'mzU2vvqm0wdr2',
      '11kXFNRcZBFgwo',
      'BgnKc6mLmE8tq',
      'njtPBlbYnHAHK'
    ]
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://media.giphy.com/media/2aDXYxDMtfeWA/giphy.gif" className="App-logo" alt="logo" />
          <h2>Kitten Vote App</h2>
        </div>
        <p className="App-intro">
          Click on the cuttest kitten to vote
        </p>
        {this.state.modal && <Modal></Modal>}
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          height: '400px',
          width: '100%'
        }} >
          {kittens.map(kittenId => {
            return <img
              key={kittenId}
              onClick={this._handleClickImg.bind(this)}
              style={styles.img}
              src={`https://media.giphy.com/media/${kittenId}/giphy.gif`} />
          })}
        </div>
      </div>
    );
  }
}

const Modal = ({ show }) =>
  <div style={{
    position: 'absolute',
    left: '25%',
    top: '25%',
    width: '50%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'darkturquoise url("https://media.giphy.com/media/14rtlR7b01cjQI/giphy.gif") no-repeat fixed center',
    color: 'aliceblue',
    fontSize: 'xx-large',
    borderRadius: '50px',
    border: '6px solid white'
  }}>
    <h1>Thanks for voting you are cute too</h1>
    <small>Please keep voting just for fun</small>
    <p style={{fontSize:'12px'}}>I really dont care i am a dog person</p>
  </div>

export default App;
