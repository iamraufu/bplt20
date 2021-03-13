import './App.css';
import { useEffect, useState } from 'react';
import Players from './components/Players/Players';
import Sold from './components/Sold/Sold';
import fakeData from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Title from './components/Title/Title';

function App() {
  const [players, setPlayers] = useState([])
  const [sold, setSold] = useState([])
  
  useEffect(() => {
    setPlayers(fakeData)
  }, [])

  const handleAddPlayers = (player) => {
    const newSold = [...sold, player]
    setSold(newSold)
    // Button.style.display = 'none';
    console.log(player.name," Added ", "Salary: ", player.salary)
  }

  return (
    <div className="App">
      <Title></Title>
      <NavBar></NavBar>

      <div className="header">
        <Header></Header>

        <div className="sub-header text-center">
          <p className="text-center auction-status">Players Sold  <span className="highlight"> {sold.length}</span> Total Players <span className="highlight">{players.length}</span></p>
        </div>
        <Sold sold={sold} ></Sold>
      </div>
      <div>


        <div className="players-card">
          {
            players.map(player => <Players player={player} handleAddPlayers={handleAddPlayers} key={player.id}></Players>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
