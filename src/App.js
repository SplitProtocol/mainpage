import React, { useState } from 'react';
import bootstrap from 'bootstrap'
import logo from './logo.svg';
import limexText from './static/limex.png'
import bgvideo from './static/bg.mp4'
import logoImg from './static/logoBall.gif'
import logoCat from './static/cat1.png'
import { Counter } from './features/counter/Counter';
import slaid1 from './static/1.jpg'
import slaid2 from './static/2.jpg'
import slaid3 from './static/3.jpg'
import './App.css';







function App() {
  let CurrentSlaid = 'slaid0'
  let CurentMenuItem = 'item0'

  function setSlaid(slaid) {
    document.getElementById(slaid).className = 'slaid'
    document.getElementById(slaid).className = 'slaidAnim'
    CurrentSlaid = slaid
  }

  function setMenuItemSelect(itemMenu) {

    document.getElementById(CurentMenuItem).className = 'text-start leftMenuItem p-0 m-0'
    if (CurentMenuItem[0] == '_') {
      document.getElementById(CurentMenuItem + '0').className = 'text-start leftMenuItem p-0 m-0'
    }
    
    document.getElementById(itemMenu).className = 'text-start leftMenuItemSelect p-0 m-0'
    if (itemMenu[0] == '_') {
      document.getElementById(itemMenu + '0').className = 'text-start leftMenuItemSelect p-0 m-0'
    }
    
    CurentMenuItem = itemMenu
  }

  function hideCurrentSlaid() {
    document.getElementById(CurrentSlaid).className = 'slaidHide'
  }

  return (
    <div className="App">

      {/* bg video */}
      <video autoPlay muted loop className="bgVideo">
        <source src={bgvideo} type="video/mp4"/>
      </video>

      {/* logo navbar */}
      <div className='w-100 row mt-3 d-flex align-items-center'>

        <div className='col-1 d-flex justify-content-end p-0 m-0'>
          <img className='logoImg' src={logoImg} />
        </div>  

        <p className='f-righteous-400 white col-2 m-0 p-0 mt-2 fsize-3 ta-s'>{'Limex'}</p>

        <div className='col-9 mt-4 d-flex justify-content-end'> 

          <div className='row w-50 d-flex align-items-center justify-content-center'>

            <div className='col-2 d-flex justify-content-end align-items-center'>
              <p className='docsButton fsize-3h p-0 m-0 f-barlow-500 white'>{'Docs'}</p>
            </div>
            
            <div className='col-2'>
              <img className='logoCat' src={logoCat}/>
            </div>

            {/* <div className='col-1'>
            </div> */}

            <div className='buttonConnectWallet col-6 d-flex align-items-center justify-content-center mx-2'>
              <p className='p-0 m-0 f-roboto-400'>{'Connect wallet'}</p>
            </div>

          </div>
          
        </div>
      </div>
      

      {/* body */}
      <div className='row mt-5'>
        {/* left menu */}
        <div className='col-2 ms-5 mt-5'>

          {/* item 1 */}
          <div className='d-flex flex-column leftMenuButton' 
            onClick={() => {
              setMenuItemSelect('item0')
              hideCurrentSlaid(CurrentSlaid)
              setSlaid('slaid0')}}
          >
            <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='item0'>{'Limex'}</p>
          </div>

          {/* item 2 */}
          <div className='d-flex flex-column leftMenuButton mt-3' 
            onClick={() => {
              setMenuItemSelect('_item1')
              hideCurrentSlaid(CurrentSlaid)
              setSlaid('slaid1')}}>
            <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='_item1'>Decentralized</p>
            <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='_item10'>Orderbook</p>
          </div>
          
          {/* item 3 */}
          <div 
            className='d-flex flex-column leftMenuButton mt-3'  
            onClick={() => {
              setMenuItemSelect('item2')
              hideCurrentSlaid(CurrentSlaid)
              setSlaid('slaid2')
            }}
          >
            <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='item2'>{'About Limex'} </p>
          </div>

          {/* item 4 */}
          <div className='d-flex flex-column leftMenuButton mt-3' 
            onClick={() => {
              setMenuItemSelect('_item3')
              hideCurrentSlaid(CurrentSlaid)
              setSlaid('slaid3')}}
          >
            <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='_item3'>{'How Limex'}</p>
            <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='_item30'>{'make money'}</p>
          </div>
          
          {/* item 5 */}
          <div className='d-flex flex-column leftMenuButton mt-3'
            onClick={() => {
              setMenuItemSelect('_item4')
              hideCurrentSlaid(CurrentSlaid)
              setSlaid('slaid4')}}
          >
            <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='_item4'>{'New Crypto'}</p>
            <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='_item40'>{'something'}</p>
          </div>

        </div> 

        <div className='col-5'>
          {/* slaid0 */}
          <div className='slaid' id='slaid0'>
            <p className="fsize-4 text-start f-glory white m-0 p-0">Multi-Chain arbitrage</p>
            <p className="fsize-4 text-start f-glory white m-0 p-0">DEX Aggregator</p>
            <p className="fsize-2 text-start f-barlow-400 white mt-2">With limit order tools and gasless trades</p>
          </div>

          {/* slaid1 */}
          <div className='slaidHide' id='slaid1'>
            <img src={slaid1} />
          </div>
          
          {/* slaid2 */}
          <div className='slaidHide' id='slaid2'>
            <img src={slaid2} />
          </div>

          {/* slaid3 */}
          <div className='slaidHide' id='slaid3'>
            <img src={slaid3} />
          </div>

          {/* slaid4 */}
          <div className='slaidHide' id='slaid4'>
            <p className="fsize-4 text-start f-glory">Empy slaid</p>
          </div>
          
        </div>

        <div className='col-4'>
          <p className='text-start white fsize-2 m-0 p-0 mt-5 f-barlow-700'>Join to whitelist</p>
          <p className='text-start white m-0 p-0 f-barlow-400'>Subscribe to our social</p>

          <div className='row d-flex align-items-center justify-content-between m-0 p-0 mt-5'>
            <p className='text-start white col-4 m-0 p-0 f-roboto-400'>Announcements</p>
            <input className='input-social col-8 f-barlow-400 h-5h' placeholder='youre @nickname'>
            </input>
          </div>
          <div className='row d-flex align-items-center justify-content-between m-0 p-0 mt-3'>
            <p className='text-start white col-4 m-0 p-0 f-roboto-400'>Community</p>
            <input className='input-social col-8 f-barlow-400 h-5h' placeholder='youre @nickname'>
            </input>
          </div>
          <div className='row d-flex align-items-center justify-content-between m-0 p-0 mt-3'>
            <p className='text-start white col-4 m-0 p-0 f-roboto-400'>Limex Twitter</p>
            <input className='input-social col-8 f-barlow-400 h-5h' placeholder='youre @nickname'>
            </input>
          </div>
          <div className='row d-flex align-items-center justify-content-between m-0 p-0 mt-3'>
            <p className='text-start white col-4 m-0 p-0 f-roboto-400'>Limex retweet</p>
            <input className='input-social col-8 f-barlow-400 h-5h' placeholder='youre @nickname'>
            </input>
          </div>
          <div className='buttonJoin d-flex align-items-center justify-content-center h-15 m-0 p-0 mt-3'>
              <p className='p-0 m-0 f-barlow-500'>{'Join'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
