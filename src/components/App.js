// Dependencies
import React from 'react';
//Components//
import Header from './Global/Header'; 
import Content from './Global/Content';
import Footer from './Global/Footer';

//Data
import items from '../data/menu';

function App() {
  return (
    <div className="App">
     <Header title="Codejobs" items={items}/>
     <Content/>
     <Footer/>
    </div>
  );
}

export default App;
