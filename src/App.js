import './App.css';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Channels from './components/Channels/Channels';

function App() {
  // useEffect(() => {
  //   fetch('./channel.JSON')
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // }, [])
  return (
    <div>
      <Header></Header>
      <Channels></Channels>
    </div>
  );
}

export default App;
