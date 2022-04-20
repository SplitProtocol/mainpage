import React, { useEffect, useState } from 'react';
import bootstrap from 'bootstrap'
import logo from './logo.svg';
import limexText from './static/limex.png'
import bgvideo from './static/bg.mp4'
import logoImg from './static/logoBall.gif'
import logoCat from './static/cat1.png'
// import { Counter } from './features/counter/Counter';
import slaid1 from './static/1.jpg'
import slaid2 from './static/2.jpg'
import slaid3 from './static/3.jpg'
import slaid4 from './static/4.jpg'
import slaid0 from './static/0.jpg'

import { MobForm} from './features/mobForm/mobform';
import { MobFormH } from './features/mobForm/mobformH';

import './App.css';


function App() {
  
  const [isMobile, setIsMobile] = useState(false)
  const [isOrientaionH, setIsOrientaionH] = useState(false)
  const MobileWidth = 1000
  const arrMenuItemSlaids = ['Limex', 'Decentralized Orderbook', 'About Limex', 'How Limex make money', 'New Crypto something']
  const [curMenuItemM, setcurMenuItemM] = useState(0)
  const [nextMenuItemM, setnextMenuItemM] = useState(1)
  const [slaidNext, setslaidNext] = useState(slaid1)

  const [tgNick, setTgNick] = useState('')
  const [twNick, setTwNick] = useState('')
  const [rtwNick, setRtwNick] = useState('')
  const [dscNick, setDscNick] = useState('')
  

  let CurrentSlaid = 'slaid0'
  let CurentMenuItem = 'item0'

  function refreshSlaidNext(numSlaid) {
      let imgslaid = document.getElementById('imgslaidnext')
      if (numSlaid == '4') {
        imgslaid.src = slaid0
      }
      else if (numSlaid == '0') {
        imgslaid.src = slaid1
      }
      else if (numSlaid == '1') {
        imgslaid.src = slaid2
      }
      else if (numSlaid == '2') {
        imgslaid.src = slaid3
      }
      else if (numSlaid == '3') {
        imgslaid.src = slaid4
      }
  }

  function setSlaid(slaid) {
    
    refreshSlaidNext(slaid.slice(-1))
    document.getElementById(slaid).className = 'slaid'
    document.getElementById(slaid).className = 'slaidAnim'

    CurrentSlaid = slaid
  }

  function clickArrowTop() {
    hideCurrentSlaid()
    let curNumSlaid = CurrentSlaid.slice(-1)
    let sld = 'slaid0'
    if (curNumSlaid == '0') {
      sld = 'slaid4'
      setMenuItemSelect('_item4')
    }
    else if (curNumSlaid == '1') {
      sld = 'slaid0'
      setMenuItemSelect('item0')
    }
    else if (curNumSlaid == '2') {
      sld = 'slaid1'
      setMenuItemSelect('_item1')
    }
    else if (curNumSlaid == '3') {
      sld = 'slaid2'
      setMenuItemSelect('item2')
    }
    else if (curNumSlaid == '4') {
      sld = 'slaid3'
      setMenuItemSelect('_item3')
    }

    refreshSlaidNext(sld.slice(-1))
    document.getElementById(sld).className = 'slaid'
    document.getElementById(sld).className = 'slaidAnim'
    CurrentSlaid = sld
  }

  function clickArrowDown() {
    hideCurrentSlaid()
    let curNumSlaid = CurrentSlaid.slice(-1)
    
    let sld = 'slaid0'
    if (curNumSlaid == '0') {
      sld = 'slaid1'
      setMenuItemSelect('_item1')
    }
    else if (curNumSlaid == '1') {
      sld = 'slaid2'
      setMenuItemSelect('item2')
    }
    else if (curNumSlaid == '2') {
      sld = 'slaid3'
      setMenuItemSelect('_item3')
    }
    else if (curNumSlaid == '3') {
      sld = 'slaid4'
      setMenuItemSelect('_item4')
    }
    else if (curNumSlaid == '4') {
      sld = 'slaid0'
      setMenuItemSelect('item0')
    }
    refreshSlaidNext(sld.slice(-1))
    document.getElementById(sld).className = 'slaid'
    document.getElementById(sld).className = 'slaidAnim'
    CurrentSlaid = sld
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

  // useEffect(() => {
  //   setIsMobile(window.innerWidth <= MobileWidth)
  //   console.log(window.innerWidth)
  // })

  useEffect(() => {
    if (isMobile) {
      var myCarousel = document.getElementById('myCarousel')

      myCarousel.addEventListener('slide.bs.carousel', function (e) {
        document.getElementById('buttonMenuM1').classList.add('buttonCarouselAinm')
        setTimeout(() => {document.getElementById('buttonMenuM1').classList.remove('buttonCarouselAinm')}, 1000)
        document.getElementById('buttonMenuM2').classList.add('buttonCarouselAinm')
        setTimeout(() => {document.getElementById('buttonMenuM2').classList.remove('buttonCarouselAinm')}, 1000)

        document.getElementById('nextSlaid').style.display = 'none'
        console.log(e.from, e.direction)
        setTimeout(() => {
          if (e.direction == 'left') {
            if (e.from == 4) {
              setcurMenuItemM(0)
              setnextMenuItemM(1)
            }
            else {
              setcurMenuItemM(e.from + 1)
              if (e.from + 1 == 4) {
                setnextMenuItemM(0)
              } 
              else {
                setnextMenuItemM(e.from + 2)
              }
            }
          }
          else
          {
            if (e.from == 0) {
              setcurMenuItemM(4)
              setnextMenuItemM(0)
            }
            else {
              setcurMenuItemM(e.from - 1)
              setnextMenuItemM(e.from)
            }
          }
        }, 500)
      })

      myCarousel.addEventListener('slid.bs.carousel', function (e) {
        
        document.getElementById('nextSlaid').style.display = 'block'
        if (e.direction == 'left') {
          if (e.from == 4) {
            document.getElementById('nextSlaid').src = slaid1
          }
          else {
            setcurMenuItemM(e.from + 1)
            if (e.from + 1 == 4) {
              document.getElementById('nextSlaid').src = slaid0
            } 
            else {
              if (e.from == 1) {
                document.getElementById('nextSlaid').src = slaid3
              }
              else if (e.from == 2) {
                document.getElementById('nextSlaid').src = slaid4
              }
              else if (e.from == 0) {
                document.getElementById('nextSlaid').src = slaid2
              }
            }
          }
        }
        else
        {
          if (e.from == 0) {
            setcurMenuItemM(4)
            setnextMenuItemM(0)
          }
          else {
            setcurMenuItemM(e.from - 1)
            setnextMenuItemM(e.from)
          }
        }

      })

    }
    
  }, [isMobile])

  // useEffect(() => {
  //   if (tgNick != '') {
  //     document.getElementById('tgnick').classList.remove('border-grey')
  //     document.getElementById('tgnick').classList.add('border-green')
  //   }
  //   else {
  //     document.getElementById('tgnick').classList.remove('border-green')
  //     document.getElementById('tgnick').classList.add('border-grey')      
  //   }
    
  // }, [tgNick])

  // useEffect(() => {
  //   if (twNick != '') {
  //     document.getElementById('twnick').classList.remove('border-grey')
  //     document.getElementById('twnick').classList.add('border-green')
  //   }
  //   else {
  //     document.getElementById('twnick').classList.remove('border-green')
  //     document.getElementById('twnick').classList.add('border-grey')      
  //   }
    
  // }, [twNick])

  // useEffect(() => {
  //   if (rtwNick != '') {
  //     document.getElementById('rtwnick').classList.remove('border-grey')
  //     document.getElementById('rtwnick').classList.add('border-green')
  //   }
  //   else {
  //     document.getElementById('rtwnick').classList.remove('border-green')
  //     document.getElementById('rtwnick').classList.add('border-grey')      
  //   }
    
  // }, [rtwNick])

  // useEffect(() => {
  //   if (dscNick != '') {
  //     document.getElementById('dscnick').classList.remove('border-grey')
  //     document.getElementById('dscnick').classList.add('border-green')
  //   }
  //   else {
  //     document.getElementById('dscnick').classList.remove('border-green')
  //     document.getElementById('dscnick').classList.add('border-grey')      
  //   }
    
  // }, [dscNick])

  useEffect(() => {
    window.addEventListener("resize", () => {
      let h = window.innerHeight
      let w = window.innerWidth
      console.log(w/h)
      if (w/h > 1 && h < 600) {
        setIsMobile(false)
        setIsOrientaionH(true)
      }
      else {
        setIsMobile(window.innerWidth < 1000)
        setIsOrientaionH(false)
      }
      
    })
  })

  useEffect(() => {
    let h = window.innerHeight
    let w = window.innerWidth
    console.log(w/h)
    if (w/h > 1 && h < 600) {
      setIsMobile(false)
      setIsOrientaionH(true)
    }
    else {
      setIsMobile(window.innerWidth < 1000)
      setIsOrientaionH(false)
    }
  })
  return (
    <div className={isMobile ? "AppM": isOrientaionH ? 'AppH': "App"}>

      {/* bg video */}
      <video autoPlay muted loop className="bgVideo">
        <source src={bgvideo} type="video/mp4"/>
      </video>

      {isMobile ? (<div className='bgBlack'>

      </div>): null}

      {/* logo navbar */}
      <div 
        className={isMobile ? ('row mt-4 d-flex align-items-center p-0 m-0'): 
                              ('w-100 row mt-3 d-flex align-items-center')}>

        <div 
          className={isMobile ? ('col-1 p-0 m-0 ms-3'): 
                                ('col-1 d-flex justify-content-end p-0 m-0')}>
          <img className={isMobile ? ('logoImgM'): ('logoImg')} src={logoImg} />
        </div>  

        {isMobile ? null: (
          <p className='f-righteous-400 white col-2 m-0 p-0 mt-2 fsize-3 ta-s'>{'Limex'}</p>
        )}

        <div className={isMobile ? 
          ('col-10 d-flex justify-content-center'): 
          ('col-9 mt-4 d-flex justify-content-end')}> 

          <div className={isMobile || isOrientaionH ? 
            ('row d-flex align-items-center justify-content-end p-0 m-0 w-100'): 
            ('row w-50 d-flex align-items-center justify-content-center')}>

            <div className={isMobile ? 
              ('col-2 d-flex justify-content-end align-items-center p-0 m-0'): 
              ('col-2 d-flex justify-content-end align-items-center')}>
              <p className='docsButton fsize-3h p-0 m-0 f-barlow-500 white'>{'Docs'}</p>
            </div>
            
            <div className='col-2'>
              <img className='logoCat' src={logoCat}/>
            </div>

            {/* <div className='col-1'>
            </div> */}

            <div className={isMobile || isOrientaionH ? 
              ('buttonConnectWalletM col-8 d-flex align-items-center justify-content-center p-0 m-0'):
              ('buttonConnectWallet col-6 d-flex align-items-center justify-content-center mx-2')}>
              <p 
                className={isMobile ? 
                  ('p-0 m-0 f-roboto-400 fsize-2h ww'):
                  ('p-0 m-0 f-roboto-400')}>
                {'Connect wallet'}
              </p>
            </div>

          </div>
          
        </div>
      </div>
      

      {/* body */}
      <div className={isMobile ? ('mt-3'): isOrientaionH ? 'row mt-0': 'row mt-5'}>

        {/* left menu */}
        {isMobile ? null: (
          <div className={isOrientaionH ? 'col-2 ms-5 mt-1': 'col-2 ms-5 mt-5'}>

            {/* arrowtop */}
            <div className='w-50'>
              <svg className='arrowButton' width="29" height="17" viewBox="0 0 29 17" fill="none" xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  clickArrowTop()
                }}
              >
                <path d="M1 15.5L14.5 2L28 15.5" stroke="white" stroke-width="2"/>
              </svg>
            </div>
            {/* item 1 */}
            <div className={isOrientaionH ? 'd-flex flex-column leftMenuButton mt-1': 'd-flex flex-column leftMenuButton mt-5'} 
              onClick={() => {
                setMenuItemSelect('item0')
                hideCurrentSlaid(CurrentSlaid)
                setSlaid('slaid0')}}
            >
              <p  className={isOrientaionH ? 'text-start leftMenuItemSelect p-0 m-0 f-barlow-700 fsize-4h': 'text-start leftMenuItemSelect p-0 m-0 f-barlow-700'} 
                  id='item0'
              >
                  {'Limex'}
              </p>
            </div>

            {/* item 2 */}
            <div className={isOrientaionH ? 'd-flex flex-column leftMenuButton mt-1 fsize-4h': 'd-flex flex-column leftMenuButton mt-4'} 
              onClick={() => {
                setMenuItemSelect('_item1')
                hideCurrentSlaid(CurrentSlaid)
                setSlaid('slaid1')}}>
              <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='_item1'>Decentralized</p>
              <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='_item10'>Orderbook</p>
            </div>
            
            {/* item 3 */}
            <div 
              className={isOrientaionH ? 'd-flex flex-column leftMenuButton mt-1 fsize-4h': 'd-flex flex-column leftMenuButton mt-4'}  
              onClick={() => {
                setMenuItemSelect('item2')
                hideCurrentSlaid(CurrentSlaid)
                setSlaid('slaid2')
              }}
            >
              <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='item2'>{'About Limex'} </p>
            </div>

            {/* item 4 */}
            <div className={isOrientaionH ? 'd-flex flex-column leftMenuButton mt-1 fsize-4h': 'd-flex flex-column leftMenuButton mt-4'} 
              onClick={() => {
                setMenuItemSelect('_item3')
                hideCurrentSlaid(CurrentSlaid)
                setSlaid('slaid3')}}
            >
              <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='_item3'>{'How Limex'}</p>
              <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='_item30'>{'make money'}</p>
            </div>
            
            {/* item 5 */}
            <div className={isOrientaionH ? 'd-flex flex-column leftMenuButton mt-1 fsize-4h': 'd-flex flex-column leftMenuButton mt-4'}
              onClick={() => {
                setMenuItemSelect('_item4')
                hideCurrentSlaid(CurrentSlaid)
                setSlaid('slaid4')}}
            >
              <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='_item4'>{'New Crypto'}</p>
              <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='_item40'>{'something'}</p>
            </div>

            {/* arrow down */}
            <div className={isOrientaionH ? 'w-50 mt-2': 'w-50 mt-5'}>
              <svg className='arrowButton' width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  clickArrowDown()
                }}
              >
                <path d="M1 1L14.5 14.5L28 1" stroke="white" stroke-width="2"/>
              </svg>
            </div>

          </div> 
        )}

        {isMobile ? null: (
        <div className='col-5'>
          {/* slaid0 */}
          <div className='slaid' id='slaid0'>
            <p className="fsize-4 text-start f-glory white m-0 p-0">Multi-Chain arbitrage</p>
            <p className="fsize-4 text-start f-glory white m-0 p-0">DEX Aggregator</p>
            <p className="fsize-2 text-start f-barlow-400 white mt-2">With limit order tools and gasless trades</p>
          </div>

          {/* slaid1 */}
          <div className='slaidHide' id='slaid1'>
            <img className='rounded w-100' src={slaid1} />
          </div>
          
          {/* slaid2 */}
          <div className='slaidHide' id='slaid2'>
            <img className='rounded w-100' src={slaid2} />
          </div>

          {/* slaid3 */}
          <div className='slaidHide' id='slaid3'>
            <img className='rounded w-100' src={slaid3} />
          </div>

          {/* slaid4 */}
          <div className='slaidHide' id='slaid4'>
            <img className='rounded w-100' src={slaid4} />
          </div>

          {/* nextSlaid */}
          <div className='slaidnext'>
            <img className='rounded w-100' src={slaidNext} id='imgslaidnext'/>
          </div>
        </div>)}

        

        {/* mobilebody */}
        {isMobile ? (
          <>
          <div id="myCarousel" class="carousel slide " data-bs-interval="false" data-bs-touch="true">
            <div className='row p-0 m-0 d-flex justify-content-between'>
              <button 
                className='buttonCarouselM col-6 d-flex justify-content-center p-0 m-0 ps-2'
                type="button" 
                data-bs-target="#myCarousel" 
                data-bs-slide="prev"
                id='buttonMenuM1'
              >
                <p className='text-start fsize-4w leftMenuItemSelect p-0 m-0 f-barlow-700' >{arrMenuItemSlaids[curMenuItemM]}</p>
              </button>
              
              <button 
                className='buttonCarouselM col-6 d-flex justify-content-center p-0 m-0' 
                type="button" 
                data-bs-target="#myCarousel" 
                data-bs-slide="next"
                id='buttonMenuM2'
              >
                <p className='text-start fsize-4w leftMenuItem p-0 m-0 f-barlow-700'>{arrMenuItemSlaids[nextMenuItemM]}</p>
              </button>
            </div>

            <div class="carousel-inner position-relative">

              <div className='nextSlaid' >
                <img className='imgslaidM' id='nextSlaid' src={slaid1} />
              </div>

              <div class="carousel-item active" data-bs-interval="10000">
                <div className='slaidM ms-3 mt-4' id='slaid0'>
                  <p className="fsize-4 text-start f-glory white m-0 p-0">Multi-Chain arbitrage</p>
                  <p className="fsize-4 text-start f-glory white m-0 p-0">DEX Aggregator</p>
                  <p className="fsize-3 text-start f-barlow-400 white mt-2">With limit order tools and gasless trades</p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <div className='d-flex align-items-center justify-content-start mt-4 ms-4' id='slaid1'>
                  <img className='imgslaidM' src={slaid1} />
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <div className='d-flex align-items-center justify-content-start mt-4 ms-4' id='slaid1'>
                  <img className='imgslaidM' src={slaid2} />
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <div className='d-flex align-items-center justify-content-start mt-4 ms-4' id='slaid1'>
                  <img className='imgslaidM' src={slaid3} />
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <div className='d-flex align-items-center justify-content-start mt-4 ms-4' id='slaid1'>
                  <img className='imgslaidM' src={slaid1} />
                </div>
              </div>
            </div>
            
          </div>
        </>
        ): null}

        {isMobile ? (
          <MobForm/>
          // <div className='p-0 m-0 ps-1 pe-4 mt-5'>
          //   <p className='text-start white fsize-4 m-0 p-0 ms-2 f-barlow-700'>Beta is live!</p>
          //   <p className='text-start white fsize-2 m-0 p-0 ms-2 f-barlow-400'>subscribe to our social</p>

          //   <div className='row d-flex align-items-center justify-content-start m-0 p-0 mt-3'>
          //     <svg className='col-2 m-0 p-0' width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          //       <path d="M35.9698 2.93563C36.2503 0.979486 34.5272 -0.564513 32.9158 0.199132L0.82084 15.4089C-0.334736 15.9565 -0.250209 17.8458 0.948301 18.2577L7.56708 20.5328C8.83031 20.967 10.1982 20.7425 11.3013 19.9199L26.2237 8.79209C26.6737 8.45652 27.1642 9.14712 26.7797 9.57496L16.0383 21.5284C14.9963 22.688 15.2031 24.6528 16.4564 25.5012L28.4827 33.6413C29.8315 34.5543 31.5668 33.6371 31.8191 31.8778L35.9698 2.93563Z" fill="white"/>
          //     </svg>
          //     {/* <input className='input-social col-10 f-barlow-400 h-6h' placeholder='youre @nickname' 
          //             id='tgnick' value={tgNick} onChange={(e) => setTgNick(e.target.value)}>
          //     </input> */}
          //     <div className='col-10'>
          //       <button className='buttonSocial w-100  px-2 d-flex align-items-center justify-content-center'>
          //         <p className='whitegrey p-0 m-0 f-barlow-400'>Announcements</p>
          //       </button>
          //     </div>
          //   </div>

          //   <div className='row d-flex align-items-center justify-content-start m-0 p-0 mt-4'>
          //     <svg className='col-2 m-0 p-0' width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          //       <path d="M11.2998 32C7.14053 32 3.26337 30.6909 0 28.4322C2.77071 28.6262 7.66038 28.1616 10.7017 25.0223C6.12653 24.7951 4.06319 20.998 3.79406 19.3753C4.18281 19.5375 6.03682 19.7323 7.08344 19.2779C1.82044 17.8499 1.01305 12.8519 1.19247 11.3266C2.17928 12.073 3.85387 12.3327 4.51174 12.2677C-0.392409 8.47059 1.37189 2.75862 2.23909 1.52535C5.75849 6.80162 11.033 9.76497 17.5582 9.9298C17.4352 9.34589 17.3702 8.73798 17.3702 8.11359C17.3702 3.63258 20.7172 0 24.846 0C27.0033 0 28.9471 0.991658 30.3116 2.57786C31.7532 2.21232 33.9227 1.35662 34.9833 0.616633C34.4487 2.69371 32.7843 4.42642 31.7776 5.06863C31.7859 5.09048 31.7694 5.04669 31.7776 5.06863C32.6619 4.92388 35.0547 4.42625 36 3.73225C35.5325 4.89913 33.768 6.83927 32.3199 7.92546C32.5893 20.7834 23.4983 32 11.2998 32Z" fill="white"/>
          //     </svg>
          //     <div className='col-10'>
          //       <button className='buttonSocial w-100  px-2 d-flex align-items-center justify-content-center'>
          //         <p className='whitegrey p-0 m-0 f-barlow-400'>Limex Twitter</p>
          //       </button>
          //     </div>
          //     {/* <input className='input-social col-10 f-barlow-400 h-6h' placeholder='youre @nickname' 
          //             id='twnick' value={twNick} onChange={(e) => setTwNick(e.target.value)}
          //     >
          //     </input> */}
          //   </div>

          //   {/* <div className='row d-flex align-items-center justify-content-start m-0 p-0 mt-3'>
          //     <svg className='col-2 m-0 p-0' width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          //       <path d="M11.2998 32C7.14053 32 3.26337 30.6909 0 28.4322C2.77071 28.6262 7.66038 28.1616 10.7017 25.0223C6.12653 24.7951 4.06319 20.998 3.79406 19.3753C4.18281 19.5375 6.03682 19.7323 7.08344 19.2779C1.82044 17.8499 1.01305 12.8519 1.19247 11.3266C2.17928 12.073 3.85387 12.3327 4.51174 12.2677C-0.392409 8.47059 1.37189 2.75862 2.23909 1.52535C5.75849 6.80162 11.033 9.76497 17.5582 9.9298C17.4352 9.34589 17.3702 8.73798 17.3702 8.11359C17.3702 3.63258 20.7172 0 24.846 0C27.0033 0 28.9471 0.991658 30.3116 2.57786C31.7532 2.21232 33.9227 1.35662 34.9833 0.616633C34.4487 2.69371 32.7843 4.42642 31.7776 5.06863C31.7859 5.09048 31.7694 5.04669 31.7776 5.06863C32.6619 4.92388 35.0547 4.42625 36 3.73225C35.5325 4.89913 33.768 6.83927 32.3199 7.92546C32.5893 20.7834 23.4983 32 11.2998 32Z" fill="white"/>
          //     </svg>
          //     <input className='input-social col-10 f-barlow-400 h-6h' placeholder='youre @nickname' 
          //       id='rtwnick' value={rtwNick} onChange={(e) => setRtwNick(e.target.value)}
          //     >
          //     </input>
          //   </div> */}

          //   <div className='row d-flex align-items-center justify-content-start m-0 p-0 mt-4 '>
          //     <svg className='col-2 m-0 p-0 ' width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          //       <path d="M30.4955 2.34496C28.165 1.24949 25.6733 0.453301 23.0684 0C22.7483 0.581155 22.3746 1.3628 22.117 1.98464C19.3477 1.56621 16.6039 1.56621 13.8857 1.98464C13.6281 1.3628 13.2458 0.581155 12.9231 0C10.3152 0.453301 7.82063 1.25239 5.49029 2.35077C0.789966 9.48735 -0.484217 16.4467 0.152875 23.3072C3.27038 25.6464 6.29161 27.0672 9.26186 27.9971C9.99523 26.983 10.6493 25.905 11.2128 24.7688C10.1396 24.3591 9.1118 23.8535 8.14058 23.2665C8.39825 23.0748 8.65026 22.8742 8.89377 22.668C14.8174 25.4516 21.2533 25.4516 27.1062 22.668C27.3524 22.8742 27.6045 23.0748 27.8593 23.2665C26.8852 23.8563 25.8546 24.362 24.7814 24.7717C25.3449 25.905 25.9961 26.9859 26.7323 28C29.7054 27.0702 32.7295 25.6493 35.847 23.3072C36.5946 15.3541 34.57 8.4587 30.4955 2.34496ZM12.0198 19.0881C10.2416 19.0881 8.78334 17.4201 8.78334 15.389C8.78334 13.3579 10.2104 11.6871 12.0198 11.6871C13.8291 11.6871 15.2873 13.3549 15.2562 15.389C15.2591 17.4201 13.8291 19.0881 12.0198 19.0881ZM23.9802 19.0881C22.2019 19.0881 20.7436 17.4201 20.7436 15.389C20.7436 13.3579 22.1708 11.6871 23.9802 11.6871C25.7894 11.6871 27.2477 13.3549 27.2165 15.389C27.2165 17.4201 25.7894 19.0881 23.9802 19.0881Z" fill="white"/>
          //     </svg>
          //     <div className='col-10'>
          //       <button className='buttonSocial w-100  px-2 d-flex align-items-center justify-content-center'>
          //         <p className='whitegrey p-0 m-0 f-barlow-400'>Community</p>
          //       </button>
          //     </div>
          //     {/* <input className='input-social col-10 f-barlow-400 h-6h' placeholder='youre @nickname'
          //       id='dscnick' value={dscNick} onChange={(e) => setDscNick(e.target.value)}
          //     >
          //     </input> */}
          //   </div>
          //   {/* <div className='buttonJoin d-flex align-items-center justify-content-center h-6h   m-0 p-0 mt-2 ms-2'>
          //       <p className='p-0 m-0 f-barlow-500'>{'Join'}</p>
          //   </div> */}
          // </div>
        ): null}
        { !isMobile && !isOrientaionH ?
          (
            <div className='col-4'>
              {/* <p className='text-start white fsize-2 m-0 p-0 mt-5 f-barlow-700'>Join to whitelist</p> */}
              <p className='text-start white fsize-2 m-0 p-0 mt-5 f-barlow-700'>Beta is live!</p>
              <p className='text-start white m-0 p-0 f-barlow-400'>subscribe to our social</p>

              <div className='row d-flex align-items-center justify-content-start m-0 p-0 mt-5'>
                <p className='text-start white col-4 m-0 p-0 f-roboto-400'>Announcements</p>
                {/* <input type='text' className='input-social col-7 f-barlow-400 h-5h border-grey' placeholder='youre @nickname' id='tgnick' value={tgNick} onChange={(e) => setTgNick(e.target.value)}>
                </input> */}
                <div className='col-8'>
                  <button className='buttonSocial w-100  px-2 d-flex align-items-center justify-content-center'>
                    <svg className='col-1 m-0 p-0 me-2' width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.9849 1.46781C18.1252 0.489743 17.2636 -0.282256 16.4579 0.099566L0.41042 7.70445C-0.167368 7.97826 -0.125104 8.92289 0.47415 9.12887L3.78354 10.2664C4.41515 10.4835 5.09909 10.3712 5.65064 9.95995L13.1118 4.39605C13.3368 4.22826 13.5821 4.57356 13.3899 4.78748L8.01913 10.7642C7.49814 11.344 7.60155 12.3264 8.22822 12.7506L14.2413 16.8206C14.9158 17.2771 15.7834 16.8185 15.9095 15.9389L17.9849 1.46781Z" fill="white"/>
                    </svg>
                    <p className='white p-0 m-0 f-barlow-400'>Limex_protocol</p>
                  </button>
                </div>
              </div>

              <div className='row d-flex align-items-center justify-content-between m-0 p-0 mt-3'>
                <p className='text-start white col-4 m-0 p-0 f-roboto-400'>Limex Twitter</p>
                <div className='col-8'>
                  <button className='buttonSocial w-100  px-2 d-flex align-items-center justify-content-center'>
                    <svg className='col-1 m-0 p-0 me-2' width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.64991 16C3.57026 16 1.63168 15.3455 0 14.2161C1.38535 14.3131 3.83019 14.0808 5.35087 12.5112C3.06326 12.3976 2.0316 10.499 1.89703 9.68763C2.0914 9.76876 3.01841 9.86613 3.54172 9.63894C0.910221 8.92495 0.506525 6.42596 0.596235 5.66329C1.08964 6.03651 1.92694 6.16633 2.25587 6.13387C-0.196205 4.23529 0.685945 1.37931 1.11954 0.762677C2.87924 3.40081 5.51649 4.88248 8.7791 4.9649C8.71759 4.67294 8.6851 4.36899 8.6851 4.0568C8.6851 1.81629 10.3586 0 12.423 0C13.5016 0 14.4735 0.495829 15.1558 1.28893C15.8766 1.10616 16.9613 0.678308 17.4916 0.308316C17.2243 1.34686 16.3922 2.21321 15.8888 2.53431C15.893 2.54524 15.8847 2.52334 15.8888 2.53431C16.331 2.46194 17.5274 2.21313 18 1.86613C17.7663 2.44957 16.884 3.41964 16.16 3.96273C16.2947 10.3917 11.7492 16 5.64991 16Z" fill="white"/>
                    </svg>
                    <p className='white p-0 m-0 f-barlow-400'>Limex_protocol</p>
                  </button>
                </div>
                {/* <input className='input-social col-7 f-barlow-400 h-5h' placeholder='youre @nickname'
                  id='rtwnick' value={rtwNick} onChange={(e) => setRtwNick(e.target.value)}
                >
                </input> */}
              </div>

              <div className='row d-flex align-items-center justify-content-between m-0 p-0 mt-3'>
                
                <p className='text-start white col-4 m-0 p-0 f-roboto-400'>Community</p>
                <div className='col-8'>
                  <button className='buttonSocial w-100  px-2 d-flex align-items-center justify-content-center'>
                    <svg className='col-1 m-0 p-0 me-2' width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.2477 1.17248C14.0825 0.624743 12.8367 0.22665 11.5342 0C11.3742 0.290577 11.1873 0.681402 11.0585 0.992319C9.67387 0.783107 8.30197 0.783107 6.94286 0.992319C6.81404 0.681402 6.62288 0.290577 6.46153 0C5.1576 0.22665 3.91031 0.626196 2.74515 1.17539C0.394983 4.74368 -0.242108 8.22336 0.0764375 11.6536C1.63519 12.8232 3.1458 13.5336 4.63093 13.9985C4.99762 13.4915 5.32466 12.9525 5.6064 12.3844C5.06982 12.1795 4.5559 11.9268 4.07029 11.6332C4.19913 11.5374 4.32513 11.4371 4.44689 11.334C7.40868 12.7258 10.6267 12.7258 13.5531 11.334C13.6762 11.4371 13.8022 11.5374 13.9296 11.6332C13.4426 11.9282 12.9273 12.181 12.3907 12.3859C12.6725 12.9525 12.9981 13.493 13.3662 14C14.8527 13.5351 16.3647 12.8246 17.9235 11.6536C18.2973 7.67707 17.285 4.22935 15.2477 1.17248ZM6.00988 9.54403C5.12079 9.54403 4.39167 8.71004 4.39167 7.69451C4.39167 6.67893 5.10521 5.84353 6.00988 5.84353C6.91456 5.84353 7.64365 6.67747 7.62808 7.69451C7.62954 8.71004 6.91456 9.54403 6.00988 9.54403ZM11.9901 9.54403C11.101 9.54403 10.3718 8.71004 10.3718 7.69451C10.3718 6.67893 11.0854 5.84353 11.9901 5.84353C12.8947 5.84353 13.6238 6.67747 13.6083 7.69451C13.6083 8.71004 12.8947 9.54403 11.9901 9.54403Z" fill="white"/>
                    </svg>
                    <p className='white p-0 m-0 f-barlow-400'>Limex</p>
                  </button>
                </div>
                {/* <input className='input-social col-7 f-barlow-400 h-5h' placeholder='youre @nickname'
                  id='twnick' value={twNick} onChange={(e) => setTwNick(e.target.value)}
                >
                </input> */}
              </div>


              {/* <div className='row d-flex align-items-center justify-content-between m-0 p-0 mt-3'>
                <svg className='col-1 m-0 p-0' width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.64991 16C3.57026 16 1.63168 15.3455 0 14.2161C1.38535 14.3131 3.83019 14.0808 5.35087 12.5112C3.06326 12.3976 2.0316 10.499 1.89703 9.68763C2.0914 9.76876 3.01841 9.86613 3.54172 9.63894C0.910221 8.92495 0.506525 6.42596 0.596235 5.66329C1.08964 6.03651 1.92694 6.16633 2.25587 6.13387C-0.196205 4.23529 0.685945 1.37931 1.11954 0.762677C2.87924 3.40081 5.51649 4.88248 8.7791 4.9649C8.71759 4.67294 8.6851 4.36899 8.6851 4.0568C8.6851 1.81629 10.3586 0 12.423 0C13.5016 0 14.4735 0.495829 15.1558 1.28893C15.8766 1.10616 16.9613 0.678308 17.4916 0.308316C17.2243 1.34686 16.3922 2.21321 15.8888 2.53431C15.893 2.54524 15.8847 2.52334 15.8888 2.53431C16.331 2.46194 17.5274 2.21313 18 1.86613C17.7663 2.44957 16.884 3.41964 16.16 3.96273C16.2947 10.3917 11.7492 16 5.64991 16Z" fill="white"/>
                </svg>              
                <p className='text-start white col-4 m-0 p-0 f-roboto-400'>Limex retweet</p>
                <input className='input-social col-7 f-barlow-400 h-5h' placeholder='youre @nickname'
                  id='dscnick' value={dscNick} onChange={(e) => setDscNick(e.target.value)}
                >
                </input>
              </div>
              <div className='buttonJoin d-flex align-items-center justify-content-center h-15 m-0 p-0 mt-3'>
                  <p className='p-0 m-0 f-barlow-500'>{'Join'}</p>
              </div> */}
            </div>
          ): null
        }

        {!isMobile && isOrientaionH ?
          (
            <div className='col-4'>
              <MobFormH/>
            </div>
          ):null
        }

      </div>
    </div>
  );
}

export default App;
