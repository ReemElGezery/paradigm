import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
// import { css, cx } from '@emotion/css'
import ClipLoader from "react-spinners/PulseLoader";


function App() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 2000
    )


  }, []

  )
  return (
    <div className="App">
      {

        loading ?
          <div>
            <ClipLoader color={"#36D7B7"}
              loading={loading}
              size={60}
              css={`
  
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    height:100vh
                  
                  `}

            />
          </div>
          :
          <Home></Home>

      }


    </div>

  );
}

export default (App);
