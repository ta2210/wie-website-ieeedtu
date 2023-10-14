import React from 'react'
import logo2 from "../Assets/IEEELOGO2.png"
import logo1 from "../Assets/WIELOGO.png"
import { TfiMenu } from "react-icons/tfi"
import { ImCross } from "react-icons/im"
import $ from 'jquery'
import data from "../Data/NavbarData.json"
import Print from "printfirst" //Created by me
const Navbar = () => {
    const [mshow, cmshow] = React.useState(true);
    const [mshow2, cmshow2] = React.useState(false);
    const [scstart, cscstart] = React.useState(false);
    const [screenwidth,screenwidthc]=React.useState(window.innerWidth);
    const [showbar,cshowbar]=React.useState(false);
    // React.ussEffect(()=>{
    console.log(data.data[1]) 
    // },[])
    React.useEffect(() => {
        if(screenwidth<500){
            // cshowbar(true);
        }
        else{
            // cshowbar(false);
        }
    }, [screenwidth])
    return (
        <>
            <div className={`${!showbar?'':'hidden'} ${mshow ? 'hidden' : 'sideback'}`} onClick={() => { cmshow(!mshow); cmshow2(!mshow2);}}>
            </div>
            <div className={`${!showbar?'':'hidden'} sidebar`}
                wobble={`${scstart ? (mshow ? 'true' : 'false') : 'no'}`}
                onAnimationEnd={() => {
                    if (mshow2 === false) {
                        cmshow(true);
                    }
                    else {
                        cmshow(false);
                    }

                }}
            >
                <div className={`side-items ${!showbar?'':'hidden'}`}>
                    <ul className='sidelist'>
                        {
                            data.data.map((i,j)=>{
                                return (<>
                                    <li className='sideitem' href={i.link}>
                                        <h2 className='sidename'>
                                            {i.name}
                                        </h2>
                                    </li>
                                </>)
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className='navbar-main'>
                <div className='logos-nav'>
                    <div className='nav-logo1'>
                        <img src={logo2} alt="logo" className='navlogo-img1' />
                    </div>
                    <div className='nav-logo'>
                        <img src={logo1} alt="logo" className='navlogo-img' />
                    </div>
                </div>
                <div className={`nav-opt ${!showbar?'':'hidden'}`}>
                    {/* <TfiMenu className={`menuicon ${mshow?'':'hidden'}`} /> */}
                    <TfiMenu onClick={() => { cmshow(!mshow); cmshow2(!mshow2); cscstart(true) }} className={`menuicon ${mshow ? '' : 'hidden'}`} />
                    <ImCross onClick={() => { cmshow(!mshow); cmshow2(!mshow2) }} className={`menuicon2 ${mshow ? 'hidden' : ''}`} />
                </div>
                <div className={`${!showbar?'hidden':''}`}>
                    <div className={`navmenuitemshor`}>
                        <span className={`navhoritems`}>
                            About Us
                        </span>
                        <span className={`navhoritems`}>
                            About Us
                        </span>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Navbar