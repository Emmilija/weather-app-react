import React from 'react';
import Layout from './components/Layout';
import Footer from './components/layout/Footer';
import Cards from './components/Cards';



function App() {
    return (
      <div className="Weather App">
      
          <Layout />
      
      
          <Cards />
       

        <Footer />
      </div>
    );
  }



export default App;