import React, { useState } from 'react';
import Weather from './Weather';




const Layout = () => {
  const [city, setCity] = useState('');

    return (
         <div className="layout-container">
   <div className="toggle-container">
       
          <label className="toggle-label">
            <span className="toggle-slider"></span>
          </label>
        </div>
    

      <main className="main">
        <div className="display-area">
          <Weather city={city} setCity={setCity} />
        </div>
       
      </main>

    
    </div>
    );
  };
  
  export default Layout;