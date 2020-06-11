import React from 'react';
import './App.scss';
import Nav from './components/nav/nav';
import Banner from './components/banner/banner';
import List from './components/list/list';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Nav />
      <Banner />
      <List />
      </div>
    </div>
  );
}

export default App;
