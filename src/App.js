import React, { Component } from 'react';

import Header from './Components/Common/Header';
import Tile from './Components/SelectCoins/CoinTile';
import UserOptions from './Components/UserOptions/UserOptions';
import MainTable from './Components/MainTable/MainTable';

import './App.css';

class App extends Component {
  
  state = {
    coins: [
      {id: '1', name: 'Bitcoin', img: '/img/btc.png'},
      {id: '2', name: 'Ethereum', img: '/img/eth.png'},
      {id: '3', name: 'Litecoin', img: '/img/ltc.png'},
    ],
    ShowCoins: false
  }

  ToggleCoinHandler = () => {
    const temp = this.state.ShowCoins;
    this.setState({ShowCoins: !temp});
  }

  render() {

    let selectCoins = null;
    
    if (this.state.ShowCoins){
      selectCoins = (
        <div>
          {this.state.coins.map((coins, index) =>{
          return <Tile 
          CoinName={coins.name}
          imgPath={coins.img}/> 
          })}
        </div>
      );
    }

    return (
      <div className="App">

      <Header />

        <div className="Wrapper">

            <MainTable />

            {/* 

            <UserOptions
            show={() => this.ToggleCoinHandler()} />

            {selectCoins}

            */}

        </div>

      </div>
    );
  }
}

export default App;
