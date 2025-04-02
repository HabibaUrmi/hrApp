import { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import Person from './Person';
import './App.css'



  function App() {
    return (
      <div class ="app-container">
        <Header appName ="hrApp_Step1"/>
        <main class="person-container">
          <Person name="Habiba Urmi" 
          title="Web developer"
          salary="5000"
          phone="123-456-7890"
          email="urmi@example.com"
          animal="Cat" />

         <Person name="Habiba Urmi" 
          title="Web developer"
          salary="5000"
          phone="123-456-7890"
          email="urmi@example.com"
          animal="Cat" />

          <Person name="Habiba Urmi" 
          title="Web developer"
          salary="5000"
          phone="123-456-7890"
          email="urmi@example.com"
          animal="Cat" />


        
        </main>
        <Footer groupName ="REACT25K"/>
      </div>
    )
  };
  
  export default App;


