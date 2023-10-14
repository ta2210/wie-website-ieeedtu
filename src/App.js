import './App.css';
import React from 'react';
import {Navbar, Hero, AboutUs, IEEEdtu, Events, Contact, Council, Footer} from "./helper/Exporter"
function App() {
  const [crr, ccrr] = React.useState([]);
  const [crr2, ccrr2] = React.useState([]);

  const click2 = (e) => {
    var y = e.clientY;
    var x = e.clientX;
    var w = window.innerWidth;
    var h = window.innerHeight;
    var s = []
    var ss = []
    s.push((y / h * 100)-5)
    ccrr(s);
    ss.push((x / w * 100)-4)
    ccrr2(ss)
  }
  const Backbox2 = () => {

    return (
      <div className={`${crr.length>0?'box2':'hidden'}`} style={{top:`${crr[0]}%`,left:`${crr2[0]}%`}}>

      </div>
    )
  }
  return (
    <>
    <div onClick={(e)=>{click2(e)}} className='abso'>
      <div>
        <Backbox2 />


{/* 

Navbar R
Hero/home R
about wie T
about IEEEdtu T
wie Events T

// tues night
council // image
timeline
contact us // hold
footer 
*/}


        <Navbar />
        <Hero />
        {/* <AboutUs/>
        <IEEEdtu/>
        <Events/> */}
        {/* vivek vihaan dsc */}
        {/* <Council/> */}
        {/* <Gallary/> */}
        {/* <Contact/> */}
        {/* <Eventsofwomenintech/> */}
        {/* <Footer/> */}
      </div>
    </div>
    </>
  );
}

export default App;
