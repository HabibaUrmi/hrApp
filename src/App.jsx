import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import PersonList from './PersonList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header appName="hrApp" />
      <main className="person-container">
        <h1>HR APP STEP 2</h1>
        <PersonList />
      </main>
      <Footer groupName="REACT25K" />
    </div>
  );
}

export default App;




