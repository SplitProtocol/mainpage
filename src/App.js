import React, { useEffect, useState } from 'react';
import bootstrap from 'bootstrap'
import logo from './logo.svg';
import limexText from './static/limex.png'
import bgvideo from './static/bg.mp4'
import logoImg from './static/SplitLogo.png'
import logoCat from './static/cat1.png'
// import { Counter } from './features/counter/Counter';
import slaid1 from './static/1.jpg'
import slaid2 from './static/2.jpg'
import slaid3 from './static/3.jpg'
import slaid4 from './static/4.jpg'
import slaid0 from './static/0.png'

import { MobForm} from './features/mobForm/mobform';
import { MobFormH } from './features/mobForm/mobformH';
import { DesktopCard } from './features/Cards/desktopcard';
import { MobCard } from './features/Cards/mobcard';

import './App.css';


function App() {
  
  const [isMobile, setIsMobile] = useState(false)
  const [isOrientaionH, setIsOrientaionH] = useState(false)
  const [widthH, setWidthH] = useState(0)
  const MobileWidth = 1000
  const arrMenuItemSlaids = [
    'Split',
    'Copytrading',
    'Gasless Trade',
    'Swap 2 Earn',
    'Limit Orders',
    'Cross-Chain',
    'Split RPC',
    'Bundling',
    'Aggregation'
  ]
  const [curMenuItemM, setcurMenuItemM] = useState(0)
  const [nextMenuItemM, setnextMenuItemM] = useState(1)
  const [slaidNext, setslaidNext] = useState(slaid1)

  const [tgNick, setTgNick] = useState('')
  const [twNick, setTwNick] = useState('')
  const [rtwNick, setRtwNick] = useState('')
  const [dscNick, setDscNick] = useState('')

  

  let CurrentSlaid = 'slaid0'
  let CurentMenuItem = 'item0'
  let SelectedMenuItem = 1
  let placeMenuItem = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let movesDic = {
    2:['move1-1', 'move20', 'move31', 'move42', 'move53', 'move64', 'move75'],
    3:['move1-2', 'move2-1', 'move30', 'move41', 'move52', 'move63', 'move74', 'move85'],
    4:['move1-3', 'move2-2', 'move3-1', 'move40', 'move51', 'move62', 'move73', 'move84', 'move95'],
  }

  function sleep(milliseconds) {
    var t = (new Date()).getTime();
    var i = 0;
    while (((new Date()).getTime() - t) < milliseconds) {
      i++;
    }
  }

  function setSelectedMenuItem(num_item) {
    SelectedMenuItem = placeMenuItem.indexOf(num_item) + 1
    if (!isOrientaionH || true) {
      if (SelectedMenuItem == 2) {
        moveMenuUp()
      }
      else if (SelectedMenuItem != 1) {
        moveMenuUpStep(SelectedMenuItem)
      }
      SelectedMenuItem = 1
    }
  }

  function moveMenuDown() {
    for (let i=0; i<5; i++) {
      let n = placeMenuItem[i]
      let num = (i+1).toString()
      let nextnum = (i+2).toString()
      
      let item = document.getElementById(n)
        item.classList.add('moved' + num)
        setTimeout(() => {
          item.classList.remove('item' + num)
          item.classList.remove('moved' + num)
          item.classList.add('item' + nextnum)
        }, 400)
    }
    let item = document.getElementById(placeMenuItem[8])
    item.classList.add('moved6')
        setTimeout(() => {
          item.classList.remove('item6')
          item.classList.remove('moved6')
          item.classList.add('item1')
        }, 400)
    // shiftleft
    let buf = placeMenuItem[8]
    for (let i=8; i>0; i--) {
      placeMenuItem[i] = placeMenuItem[i - 1]
    }    
    placeMenuItem[0] = buf  
    console.log('placeMenuItem', placeMenuItem)  
  }

  function moveMenuUp() {
    for (let i=0; i<6; i++) {
      let n = placeMenuItem[i]
      let num = (i+1).toString()
      let nextnum = (i).toString()
      if (i == 0) {
        nextnum = '6'
      }
      
      let item = document.getElementById(n)
        item.classList.add('move' + num)
        setTimeout(() => {
          item.classList.remove('item' + num)
          item.classList.remove('move' + num)
          item.classList.add('item' + nextnum)
        }, 400)
    }
    // shiftleft
    let buf = placeMenuItem[0]
    for (let i=0; i<8; i++) {
      placeMenuItem[i] = placeMenuItem[i + 1]
    }    
    placeMenuItem[8] = buf  
    console.log('placeMenuItem', placeMenuItem)  
  }

  function moveMenuUpStep(step) {
    for (let i=0; i<(step + 4); i++) {
      let n = placeMenuItem[i]
      let num = (i+1).toString()
      let nextnum = (i+2-step).toString()
      if (nextnum <= 0) {
        nextnum = '6'
      }
      if (num > 6) {
        num = '6'
      }
      let item = document.getElementById(n)
      item.classList.add(movesDic[step-1][i])
      setTimeout(() => {
        item.classList.remove('item' + num)
        item.classList.remove(movesDic[step-1][i])
        item.classList.add('item' + nextnum)
      }, 400)
    }
    // shiftleft
    let arr = placeMenuItem.slice()
    for (let i=0; i<9; i++) {
      if ((i + step-1) > 8) {
        placeMenuItem[i] = arr[i + step-1 - 9]
      }
      else {
        placeMenuItem[i] = arr[i + step-1]
      }
    }   
    console.log('placeMenuItem', placeMenuItem, step-1)   
  }

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
    
    // refreshSlaidNext(slaid.slice(-1))
    if (isOrientaionH) {
      document.getElementById(slaid).className = 'slaidH'
      if (slaid == 'slaid0') {
        document.getElementById(slaid).className = 'slaidAnimH me-0'
      }
      else {
        document.getElementById(slaid).className = 'slaidAnimH me-0 bg-slaid'
      }
      
    }
    else {
      document.getElementById(slaid).className = 'slaid'
      if (slaid == 'slaid0') {
        document.getElementById(slaid).className = 'slaidAnim me-0'
      }
      else {
        document.getElementById(slaid).className = 'slaidAnim me-0 bg-slaid'
      }
    }
    
    CurrentSlaid = slaid
  }

  function clickArrowTop() {
    console.log('cur', SelectedMenuItem)
    if (SelectedMenuItem == 1) {
      console.log('up')
      moveMenuDown()
    }
    else {
      SelectedMenuItem -= 1
    }

    hideCurrentSlaid()
    let curNumSlaid = CurrentSlaid.slice(-1)

    let num_slaid = parseInt(curNumSlaid)
    let next_num_slaid = num_slaid - 1
    if (next_num_slaid == -1) {next_num_slaid = 8}

    let sld = 'slaid8'
    if (num_slaid != 0) {
      sld = 'slaid' + next_num_slaid.toString()
    }
    
    if (curNumSlaid == '2') {
      setMenuItemSelect('item1')
    }
    else {
      setMenuItemSelect('item' + next_num_slaid.toString())
    }

    // refreshSlaidNext(sld.slice(-1))
    // document.getElementById(sld).className = 'slaid'
    // document.getElementById(sld).className = 'slaidAnim bg-slaid'
    // CurrentSlaid = sld
    setSlaid(sld)
  }

  function clickArrowDown() {
    console.log('cur', SelectedMenuItem)
    if (SelectedMenuItem == 1) {
      console.log('down')
      moveMenuUp()
    }
    else {
      SelectedMenuItem += 1
    }

    hideCurrentSlaid()
    let curNumSlaid = CurrentSlaid.slice(-1)

    let num_slaid = parseInt(curNumSlaid)
    let next_num_slaid = num_slaid + 1
    if (next_num_slaid == 9) {next_num_slaid = 0}

    let sld = 'slaid0'
    if (num_slaid != 8) {
      sld = 'slaid' + next_num_slaid.toString()
    }
    
    if (curNumSlaid == '0') {
      setMenuItemSelect('item1')
    }
    else {

      setMenuItemSelect('item' + next_num_slaid.toString())
    }

    // refreshSlaidNext(sld.slice(-1))

    // document.getElementById(sld).className = 'slaid'
    // document.getElementById(sld).className = 'slaidAnim bg-slaid'
    // CurrentSlaid = sld
    setSlaid(sld)
  }

  function setMenuItemSelect(itemMenu) {

    document.getElementById(CurentMenuItem).className = 'text-start leftMenuItem p-0 m-0 f-barlow-700'
    if (CurentMenuItem[0] == '_') {
      document.getElementById(CurentMenuItem + '0').className = 'text-start leftMenuItem p-0 m-0 f-barlow-700'
    }
    
    document.getElementById(itemMenu).className = 'text-start leftMenuItemSelect p-0 m-0 f-barlow-700'
    if (itemMenu[0] == '_') {
      document.getElementById(itemMenu + '0').className = 'text-start leftMenuItemSelect p-0 m-0 f-barlow-700'
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

        document.getElementById('nextM').style.display = 'none'
        console.log(e.from, e.direction)
        setTimeout(() => {
          if (e.direction == 'left') {
            if (e.from == 8) {
              setcurMenuItemM(0)
              setnextMenuItemM(1)
            }
            else {
              setcurMenuItemM(e.from + 1)
              if (e.from + 1 == 8) {
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
              setcurMenuItemM(8)
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
        
        document.getElementById('nextM').style.display = 'block'
        // if (e.direction == 'left') {
        //   if (e.from == 4) {
        //     document.getElementById('nextSlaid').src = slaid1
        //   }
        //   else {
        //     setcurMenuItemM(e.from + 1)
        //     if (e.from + 1 == 4) {
        //       document.getElementById('nextSlaid').src = slaid0
        //     } 
        //     else {
        //       if (e.from == 1) {
        //         document.getElementById('nextSlaid').src = slaid3
        //       }
        //       else if (e.from == 2) {
        //         document.getElementById('nextSlaid').src = slaid4
        //       }
        //       else if (e.from == 0) {
        //         document.getElementById('nextSlaid').src = slaid2
        //       }
        //     }
        //   }
        // }
        // else
        // {
        //   if (e.from == 0) {
        //     setcurMenuItemM(9)
        //     setnextMenuItemM(0)
        //   }
        //   else {
        //     setcurMenuItemM(e.from - 1)
        //     setnextMenuItemM(e.from)
        //   }
        // }

      })

    }
    
  }, [isMobile])

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
    setWidthH(w)
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
    <div className={isMobile ? "AppM": isOrientaionH ? 'AppH': "App"} >

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
          <p className='f-righteous-400 white col-2 m-0 p-0 mt-2 fsize-3 ta-s'>{''}</p>
        )}

        <div className={isMobile ? 
          ('col-10 d-flex justify-content-center'): 
          ('col-9 my-3 d-flex justify-content-end')}> 

          <div className={isMobile || isOrientaionH ? 
            ('row d-flex align-items-center justify-content-end p-0 m-0 w-100'): 
            ('row w-50 d-flex align-items-center justify-content-center')}>

            <div className={isMobile ? 
              ('col-2 d-flex justify-content-end align-items-center p-0 m-0'): 
              ('col-2 d-flex justify-content-end align-items-center')}>
              <p className={isOrientaionH ? 'docsButton fsize-4h p-0 m-0 f-barlow-500 white': 'docsButton fsize-16 p-0 m-0 f-barlow-500 white'}>
                {'Docs'}
              </p>
            </div>
            
            <div className='col-2'>
              <img className='logoCat' src={logoCat}/>
            </div>

            {/* <div className='col-1'>
            </div> */}

            <div className={isMobile || isOrientaionH ? 
              ('buttonConnectWalletM col-8 d-flex align-items-center justify-content-center p-0 m-0 h-32'):
              ('buttonConnectWallet col-6 d-flex align-items-center justify-content-center mx-2')}>
              <p 
                className={isMobile ? 
                  ('p-0 m-0 f-barlow-700 fsize-12 ww '):
                  ('p-0 m-0 f-roboto-400 fw-bold')}>
                {'Launch app'}
              </p>
            </div>

          </div>
          
        </div>
      </div>
      

      {/* body */}
      <div className={isMobile ? ('mt-3'): isOrientaionH ? 'row mt-0': 'row mt-5'}>

        {/* left menu */}
        {isMobile ? null: (
          <div className={isOrientaionH ? 'col-2 ms-5 mt-0': 'col-2 ms-4 mt-5'}>

            {/* arrowtop */}
            {!isOrientaionH || true ? (
            <div className='w-9 mx-2'>
              <svg className='arrowButton' width="29" height="17" viewBox="0 0 29 17" fill="none" xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  clickArrowTop()
                }}
              >
                <path d="M1 15.5L14.5 2L28 15.5" stroke="white" stroke-width="2"/>
              </svg>
              
            </div>) : null}

            {/* MENU ITEMS */}

            <div className={isOrientaionH ? 'h-menuH overflow-hidden mb-1 ': 'h-menu ps-3 overflow-hidden mt-4 mb-4 mx-2'}>
              <div id='menu' className='position-relative'>
                <div className=''>
                  {/* item 1 */}
                  <div id={1} 
                    className={isOrientaionH ? 'd-flex flex-column leftMenuButton mt-1 item1': 'd-flex flex-column leftMenuButton item1'} 
                    onClick={() => {
                      setMenuItemSelect('item0')
                      hideCurrentSlaid(CurrentSlaid)
                      setSlaid('slaid0')
                      setSelectedMenuItem(1)
                    }}
                  >
                    <p  className={isOrientaionH ? 'text-start leftMenuItemSelect p-0 m-0 f-barlow-700 fsize-16': 'text-start leftMenuItemSelect p-0 m-0 f-barlow-700 fsize-16'} 
                        id='item0'
                    >
                        {'Split'}
                    </p>
                  </div>

                  {/* item 2 */}
                  <div id={2} 
                    className={isOrientaionH ? 'd-flex flex-column leftMenuButton mt-1 fsize-4h item2': 'd-flex flex-column leftMenuButton item2'} 
                    onClick={() => {
                      setMenuItemSelect('item1')
                      hideCurrentSlaid(CurrentSlaid)
                      setSlaid('slaid1')
                      setSelectedMenuItem(2)
                    }}>
                    <p className='text-start leftMenuItem p-0 m-0 f-barlow-700 fsize-16' id='item1'>Copytrading</p>
                    {/* <p className='text-start leftMenuItem p-0 m-0 f-barlow-700 fsize-16' id='_item10'>Tools</p> */}
                  </div>
                  
                  {/* item 3 */}
                  <div 
                    id={3}
                    className={isOrientaionH ? 'd-flex flex-column leftMenuButton mt-1 fsize-4h item3': 'd-flex flex-column leftMenuButton item3'}  
                    onClick={() => {
                      setMenuItemSelect('item2')
                      hideCurrentSlaid(CurrentSlaid)
                      setSlaid('slaid2')
                      setSelectedMenuItem(3)
                    }}
                  >
                    <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='item2'>{'Gasless Trade'} </p>
                  </div>

                  {/* item 4 */}
                  <div id={4} 
                    className={isOrientaionH ? 'd-flex flex-column leftMenuButton mt-1 fsize-4h item4': 'd-flex flex-column leftMenuButton item4'} 
                    onClick={() => {
                      setMenuItemSelect('item3')
                      hideCurrentSlaid(CurrentSlaid)
                      setSlaid('slaid3')
                      setSelectedMenuItem(4)
                    }}
                  >
                    <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='item3'>{'Swap 2 Earn'}</p>
                    {/* <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='_item30'>{'make money'}</p> */}
                  </div>
                  
                  {/* item 5 */}
                  <div id={5} 
                    className={isOrientaionH ? 'd-flex flex-column leftMenuButton mt-1 fsize-4h item5': 'd-flex flex-column leftMenuButton item5'}
                    onClick={() => {
                      setMenuItemSelect('item4')
                      hideCurrentSlaid(CurrentSlaid)
                      setSlaid('slaid4')
                      setSelectedMenuItem(5)
                    }}
                  >
                    <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='item4'>{'Limit Orders'}</p>
                    {/* <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='_item40'>{'something'}</p> */}
                  </div>

                  {/* item 6 */}
                  <div id={6} 
                    className={isOrientaionH ? 'd-flex flex-column leftMenuButton mt-1 fsize-4h item6': 'd-flex flex-column leftMenuButton item6'}
                    onClick={() => {
                      setMenuItemSelect('item5')
                      hideCurrentSlaid(CurrentSlaid)
                      setSlaid('slaid5')
                      setSelectedMenuItem(6)
                    }}
                  >
                    <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='item5'>{'Cross-Chain'}</p>
                    {/* <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='_item40'>{'something'}</p> */}
                  </div>

                  {/* item 7 */}
                  {/* <div id={7} 
                    className={isOrientaionH ? 'd-flex flex-column leftMenuButton mt-1 fsize-4h item6': 'd-flex flex-column leftMenuButton item6'}
                    onClick={() => {
                      setMenuItemSelect('item6')
                      hideCurrentSlaid(CurrentSlaid)
                      setSlaid('slaid6')
                      setSelectedMenuItem(7)
                    }}
                  >
                    <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='item6'>{'Split Relayer'}</p>
                  </div> */}

                  {/* item 8 */}
                  <div id={7} 
                    className={isOrientaionH ? 'd-flex flex-column leftMenuButton mt-1 fsize-4h item6': 'd-flex flex-column leftMenuButton item6'}
                    onClick={() => {
                      setMenuItemSelect('item6')
                      hideCurrentSlaid(CurrentSlaid)
                      setSlaid('slaid6')
                      setSelectedMenuItem(7)
                    }}
                  >
                    <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='item6'>{'Split RPC'}</p>
                    {/* <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='_item40'>{'something'}</p> */}
                  </div>

                  {/* item 9 */}
                  <div id={8} 
                    className={isOrientaionH ? 'd-flex flex-column leftMenuButton mt-1 fsize-4h item6': 'd-flex flex-column leftMenuButton item6'}
                    onClick={() => {
                      setMenuItemSelect('item7')
                      hideCurrentSlaid(CurrentSlaid)
                      setSlaid('slaid7')
                      setSelectedMenuItem(8)
                    }}
                  >
                    <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='item7'>{'Bundling'}</p>
                    {/* <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='_item40'>{'something'}</p> */}
                  </div>

                  {/* item 10 */}
                  <div id={9} 
                    className={isOrientaionH ? 'd-flex flex-column leftMenuButton mt-1 fsize-4h item6': 'd-flex flex-column leftMenuButton item6'}
                    onClick={() => {
                      setMenuItemSelect('item8')
                      hideCurrentSlaid(CurrentSlaid)
                      setSlaid('slaid8')
                      setSelectedMenuItem(9)
                    }}
                  >
                    <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='item8'>{'Aggregation'}</p>
                    {/* <p className='text-start leftMenuItem p-0 m-0 f-barlow-700' id='_item40'>{'something'}</p> */}
                  </div>
                </div>
              </div>
            </div>

            {/* arrow down */}
            {!isOrientaionH || true ? (
            <div className={isOrientaionH ? 'w-9 mx-2': 'w-9 mx-2'}>
              <svg className='arrowButton' width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  clickArrowDown()
                }}
              >
                <path d="M1 1L14.5 14.5L28 1" stroke="white" stroke-width="2"/>
              </svg>
            </div>): null}

          </div> 
        )}

        {isMobile ? null: (
        <div className={isOrientaionH ? 'col-5 pt-3': 'col-5 pt-5'}>
          {/* slaid0 */}
          <div className={isOrientaionH ? 'slaidH': 'slaid'} id='slaid0'>
            {/* <p className="fsize-4 text-start f-glory white m-0 p-0">Omni-Chain arbitrage</p>
            <p className="fsize-4 text-start f-glory white m-0 p-0">DEX Aggregator</p> */}
            <p className={isOrientaionH ?
              'fsize-32 text-start f-barlow-700 white ms-3 m-0 p-0 ws lh-sm':
              "fsize-4 text-start f-barlow-700 white ms-3 m-0 p-0 ws"}
            >
              {'Omni-Chain arbitrage DEX'}
            </p>
            <p className={isOrientaionH ?
              'fsize-12 text-start f-barlow-400 white ms-3 mt-5':
              "fsize-2 text-start f-barlow-400 white ms-3 mt-5"}
            >
              {'With copytrading tools and custom RPC\n'}
            </p>
          </div>

          {/* slaid1 */}
          <div className='slaidHide' id='slaid1'>
            <DesktopCard 
              isOrientaionH={isOrientaionH}
              cardTitle={'Track best dealer and\ncopy their trades'}
              cardText={'With most innovative trading tools\n'} 
            />
          </div>
          
          {/* slaid2 */}
          <div className='slaidHide' id='slaid2'>
            <DesktopCard 
              isOrientaionH={isOrientaionH}
              cardTitle={'Dont need Gas token\nin wallet'}
              cardText={'Pay in any asset and get cashbacks\n'} 
            />
          </div>

          {/* slaid3 */}
          <div className='slaidHide' id='slaid3'>
            <DesktopCard 
              isOrientaionH={isOrientaionH}
              cardTitle={'Make an arbitrage\nprofit'}
              cardText={'At each transaction causing\nan arb-opportunity'} 
            />
          </div>

          {/* slaid4 */}
          <div className='slaidHide' id='slaid4'>
            <DesktopCard 
              isOrientaionH={isOrientaionH}
              cardTitle={'The most functional\ntrading terminal'}
              cardText={'With Limit, Take Profit, Stop Loss\nand Trailling Stop orders'} 
            />
          </div>

          {/* slaid5 */}
          <div className='slaidHide' id='slaid5'>
            <DesktopCard 
              isOrientaionH={isOrientaionH}
              cardTitle={'Seamless Cross\nChain'}
              cardText={'From Any to Any asset per one transaction\n'} 
            />
          </div>

          {/* slaid6 */}
          {/* <div className='slaidHide' id='slaid6'>
            <p className="fsize-4 text-start f-barlow-700 white ms-3 m-0 p-0 text-nowrap">Decentralize protocol</p>
            <p className="fsize-4 text-start f-barlow-700 white ms-3 m-0 p-0">Get revenue</p>
            <p className="fsize-2 text-start f-barlow-400 white ms-3 mt-2">Become a Protocol Relayer and participate</p>
            <p className="fsize-2 text-start f-barlow-400 white ms-3 mt-2">in the execution of trades</p>
            <div className='d-flex justify-content-end position-absolute bottom-0 end-0 mb-3'>
              <div className='buttonConnectWallet col-6 d-flex align-items-center justify-content-center mx-3'>
                <p 
                  className={isOrientaionH ? 'p-0 m-0 f-roboto-400 fsize-3h': 'p-0 m-0 f-roboto-400'}>
                  {'Learn more'}
                </p>
              </div>
            </div>
          </div> */}

          {/* slaid7 */}
          <div className='slaidHide' id='slaid6'>
            <DesktopCard 
              isOrientaionH={isOrientaionH}
              cardTitle={'MEV protection in any\nchain'}
              cardText={'Add our RPC to Metamask to catch\narbs from multiple DEXes'} 
            />
          </div>

          {/* slaid8 */}
          <div className='slaidHide' id='slaid7'>
            <DesktopCard 
              isOrientaionH={isOrientaionH}
              cardTitle={'Grouping minor\norders'}
              cardText={'No more waiting for a long execution\nof a small order'} 
            />
          </div>

          {/* slaid9 */}
          <div className='slaidHide' id='slaid8'>
            <DesktopCard 
              isOrientaionH={isOrientaionH}
              cardTitle={'Get best price\n'}
              cardText={'With liquidity aggregation from multiple DEXes\n'} 
            />
          </div>

          {/* nextSlaid */}
          {/* <div className='slaidnext'> */}
            {/* <img className='rounded w-100' src={slaidNext} id='imgslaidnext'/> */}
            {/* <p className="fsize-4 text-start f-barlow-700 white m-0 p-0 text-nowrap">Seamless Cross-</p>
            <p className="fsize-4 text-start f-barlow-700 white m-0 p-0">Chain</p>
            <p className="fsize-2 text-start f-barlow-400 white mt-2">From Any to Any asset per one transaction</p>
          </div> */}

        </div>)
      }

        

        {/* mobilebody */}
        {isMobile ? (
          <>
          <div id="myCarousel" class="carousel slide " data-bs-ride="carousel" data-bs-interval="false" data-bs-touch="true">
            <div className='row p-0 m-0 d-flex justify-content-between menuM'>
              <button 
                className='buttonCarouselM col-6 d-flex justify-content-center p-0 m-0 ps-2'
                type="button" 
                data-bs-target="#myCarousel" 
                data-bs-slide="prev"
                id='buttonMenuM1'
              >
                <p className='text-start fsize-16 leftMenuItemSelect p-0 m-0 f-barlow-700' >{arrMenuItemSlaids[curMenuItemM]}</p>
              </button>
              
              <button 
                className='buttonCarouselM col-6 d-flex justify-content-center p-0 m-0' 
                type="button" 
                data-bs-target="#myCarousel" 
                data-bs-slide="next"
                id='buttonMenuM2'
              >
                <p className='text-start fsize-16 leftMenuItem p-0 m-0 f-barlow-700'>{arrMenuItemSlaids[nextMenuItemM]}</p>
              </button>
            </div>

            <div class="carousel-inner position-relative">

              <div className='nextSlaid bg-slaidM mt-4' id='nextM'>
              </div>

              <div class="carousel-item active" data-bs-interval="10000">
                <div className='slaidM ms-3 mt-4' id='slaid0'>
                  <p className="fsize-32 text-start f-glory white ms-2 m-0 p-0">Omni-Chain arbitrage</p>
                  <p className="fsize-32 text-start f-glory white ms-2 m-0 p-0">DEX Aggregator</p>
                  <p className="fsize-16 text-start f-barlow-400 white ms-2 mt-2">With copytrading tools and custom RPC</p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <div className='slaidM ms-3 mt-4 bg-slaid p-1' id='slaid1'>
                  <MobCard 
                    cardTitle={'Track best dealer and\ncopy their trades'}
                    cardText={'With most innovative trading tools'}
                    isButton={true}
                  />
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <div className='slaidM ms-3 mt-4 bg-slaid p-1' id='slaid1'>
                  <MobCard 
                    cardTitle={'Dont need Gas token\nin wallet'}
                    cardText={'Pay in any asset and get cashbacks'}
                    isButton={true}
                  />
                  
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <div className='slaidM ms-3 mt-4 bg-slaid p-1' id='slaid1'>
                  <MobCard 
                    cardTitle={'Make an arbitrage\nprofit'}
                    cardText={'At each transaction causing\nan arb-opportunity'}
                    isButton={true}
                  />
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <div className='slaidM ms-3 mt-4 bg-slaid p-1' id='slaid1'>
                  <MobCard 
                    cardTitle={'The most functional\ntrading terminal'}
                    cardText={'With Limit, Take Profit, Stop Loss\nand Trailling Stop orders'}
                    isButton={true}
                  />
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <div className='slaidM ms-3 mt-4 bg-slaid p-1' id='slaid1'>
                  <MobCard 
                    cardTitle={'Seamless Cross-\nChain'}
                    cardText={'From Any to Any asset per one transaction\n'}
                    isButton={true}
                  />
                </div>
              </div>

              {/* <div class="carousel-item" data-bs-interval="2000">
                <div className='slaidM ms-3 mt-4 bg-slaid p-1' id='slaid1'>
                  <p className="fsize-32 text-start f-barlow-700 white ms-2 m-0 p-0 text-nowrap">Decentralize protocol</p>
                  <p className="fsize-32 text-start f-barlow-700 white ms-2 m-0 p-0">Get revenue</p>
                  <p className="fsize-16 text-start f-barlow-400 white ms-2 mt-2">Become a Protocol Relayer and participate</p>
                  <p className="fsize-16 text-start f-barlow-400 white ms-2 mt-2">in the execution of trades</p>
                  <div className='d-flex justify-content-end position-absolute bottom-0 end-0 mb-3 me-2'>
                    <div className='buttonConnectWalletH d-flex align-items-center justify-content-center mx-3 '>
                      <p 
                        className='p-0 m-0 f-roboto-400'>
                        {'Learn more'}
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}

              <div class="carousel-item" data-bs-interval="2000">
                <div className='slaidM ms-3 mt-4 bg-slaid p-1' id='slaid1'>
                  <MobCard 
                    cardTitle={'MEV protection in any\nchain'}
                    cardText={'Add our RPC to Metamask to catch\narbs from multiple DEXes'}
                    isButton={true}
                  />
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <div className='slaidM ms-3 mt-4 bg-slaid p-1' id='slaid1'>
                  <MobCard 
                    cardTitle={'Grouping minor\norders'}
                    cardText={'No more waiting for a long execution\nof a small order'}
                    isButton={false}
                  />
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <div className='slaidM ms-3 mt-4 bg-slaid p-1' id='slaid1'>
                  <MobCard 
                    cardTitle={'Get best price\n'}
                    cardText={'With liquidity aggregation from multiple DEXes\n'}
                    isButton={false}
                  />
                </div>
              </div>
            </div>
            
          </div>
          </>
        ): null}

        {isMobile ? (
          <MobForm/>
        ): null}
        { !isMobile && !isOrientaionH ?
          (
            <div className='col-4 pt-5'>
              {/* <p className='text-start white fsize-2 m-0 p-0 mt-5 f-barlow-700'>Join to whitelist</p> */}
              <p className='text-start white fsize-24 mb-0 p-0 mt-6 f-barlow-700'>Beta is live!</p>
              <p className='text-start white m-0 p-0 f-barlow-400'>subscribe to our social</p>

              <div className='row d-flex align-items-center justify-content-start m-0 p-0 mt-4'>
                <p className='text-start white col-4 m-0 p-0 f-barlow-700 fsize-16'>Announcements</p>
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

              <div className='row d-flex align-items-center justify-content-between m-0 p-0 mt-2'>
                <p className='text-start white col-4 m-0 p-0 f-roboto-400'>Twitter</p>
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

              <div className='row d-flex align-items-center justify-content-between m-0 p-0 mt-2'>
                
                <p className='text-start white col-4 m-0 p-0 f-roboto-400'>Community</p>
                <div className='col-8'>
                  <button className='buttonSocial w-100  px-2 d-flex align-items-center justify-content-center'>
                    <svg className='col-1 m-0 p-0 me-2' width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.2477 1.17248C14.0825 0.624743 12.8367 0.22665 11.5342 0C11.3742 0.290577 11.1873 0.681402 11.0585 0.992319C9.67387 0.783107 8.30197 0.783107 6.94286 0.992319C6.81404 0.681402 6.62288 0.290577 6.46153 0C5.1576 0.22665 3.91031 0.626196 2.74515 1.17539C0.394983 4.74368 -0.242108 8.22336 0.0764375 11.6536C1.63519 12.8232 3.1458 13.5336 4.63093 13.9985C4.99762 13.4915 5.32466 12.9525 5.6064 12.3844C5.06982 12.1795 4.5559 11.9268 4.07029 11.6332C4.19913 11.5374 4.32513 11.4371 4.44689 11.334C7.40868 12.7258 10.6267 12.7258 13.5531 11.334C13.6762 11.4371 13.8022 11.5374 13.9296 11.6332C13.4426 11.9282 12.9273 12.181 12.3907 12.3859C12.6725 12.9525 12.9981 13.493 13.3662 14C14.8527 13.5351 16.3647 12.8246 17.9235 11.6536C18.2973 7.67707 17.285 4.22935 15.2477 1.17248ZM6.00988 9.54403C5.12079 9.54403 4.39167 8.71004 4.39167 7.69451C4.39167 6.67893 5.10521 5.84353 6.00988 5.84353C6.91456 5.84353 7.64365 6.67747 7.62808 7.69451C7.62954 8.71004 6.91456 9.54403 6.00988 9.54403ZM11.9901 9.54403C11.101 9.54403 10.3718 8.71004 10.3718 7.69451C10.3718 6.67893 11.0854 5.84353 11.9901 5.84353C12.8947 5.84353 13.6238 6.67747 13.6083 7.69451C13.6083 8.71004 12.8947 9.54403 11.9901 9.54403Z" fill="white"/>
                    </svg>
                    <p className='white p-0 m-0 f-barlow-400'>Split_protocol</p>
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
