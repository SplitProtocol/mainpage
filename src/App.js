import React from 'react';
import bootstrap from 'bootstrap'
import logo from './logo.svg';
import limexText from './static/limex.png'
import bgvideo from './static/bg.mp4'
import logoImg from './static/logoBall.gif'
import logoCat from './static/cat1.png'
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <video autoPlay muted loop className="bgVideo">
        <source src={bgvideo} type="video/mp4"/>
      </video>
      <div className='w-100 row mt-3'>
        <div className='col-2 d-flex justify-content-end p-0 m-0'>
          <img className='logoImg' src={logoImg} />
        </div>        
        <p className='f-glory col-2 m-0 p-0 mt-2 fsize-3 ta-s'>{'Limex'}</p>
        <div className='col-8 mt-4 d-flex justify-content-end'> 
          <div className='row w-50 d-flex align-items-center'>
            <div className='col-2 d-flex justify-content-end'>
              <p className='f-glory fsize-2'>{'Docs'}</p>
            </div>
            
            <div className='col-2'>
              <img className='logoCat' src={logoCat}/>
            </div>
            <div className='col-1'>

            </div>
            <div className='buttonConnectWallet col-6 d-flex align-items-center justify-content-center'>
              <p className='p-0 m-0'>{'Connect wallet'}</p>
            </div>
          </div>
          
        </div>
      </div>
      
      <div className='row mt-5'>
        <div className='col-2 ms-5'>
          <div className='d-flex justify-content-start'>
            <p className='leftMenuItem'>{'Limex'}</p>
          </div>
          <div className='d-flex justify-content-start'>
            <p className='leftMenuItem p-0 m-0'>Decentralized</p>
            
          </div>
          <div className='d-flex justify-content-start'>
          <p className='leftMenuItem'>Orderbook</p>
            
          </div>
          
          <div className='d-flex justify-content-start'>
            <p className='leftMenuItem'>{'About Limex'}</p>
          </div>
          <div className='d-flex justify-content-start'>
            <p className='leftMenuItem p-0 m-0'>{'How Limex'}</p>
          </div>
          <div className='d-flex justify-content-start'>
            <p className='leftMenuItem'>{'make money'}</p>
          </div>
          <div className='d-flex justify-content-start'>
            <p className='leftMenuItem p-0 m-0'>{'New Crypto'}</p>
          </div>
          <div className='d-flex justify-content-start'>
            <p className='leftMenuItem'>{'something'}</p>
          </div>
        </div> 

        <div className='col-5'>
          <p className="fsize-4 text-start f-glory">Multi-Chain arbitrage</p>
          <p className="fsize-4 text-start f-glory">DEX Aggregator</p>
          <p className="fsize-2 text-start f-glory-400">With limit order tools and gasless trades</p>
        </div>

        <div className='col-4'>
          <p className='text-start white'>Join to whitelist</p>
          <p className='text-start white'>Subscribe to our social</p>
          <div className='row d-flex align-items-center'>
            <p className='text-start white col-5'>Announcements</p>
            <input className='input-social col-6' placeholder='youre @nickname'>
            </input>
          </div>
          <div className='row d-flex align-items-center'>
            <p className='text-start white col-5'>Community</p>
            <input className='input-social col-6' placeholder='youre @nickname'>
            </input>
          </div>
          <div className='row d-flex align-items-center'>
            <p className='text-start white col-5'>Limex Twitter</p>
            <input className='input-social col-6' placeholder='youre @nickname'>
            </input>
          </div>
          <div className='row d-flex align-items-center'>
            <p className='text-start white col-5'>Limex retweet</p>
            <input className='input-social col-6' placeholder='youre @nickname'>
            </input>
          </div>
          <div className='buttonConnectWallet d-flex align-items-center justify-content-center'>
              <p className='p-0 m-0'>{'Join'}</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
