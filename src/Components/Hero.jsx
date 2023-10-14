import React from 'react'
import wietry from "../Assets/wietry.png"
const Hero = () => {
    const [rc1, crc1] = React.useState(47);
    const [gc1, grc1] = React.useState(3);
    const [bc1, brc1] = React.useState(110);
    const [rc2, crc2] = React.useState(16);
    const [gc2, grc2] = React.useState(1);
    const [bc2, brc2] = React.useState(40);
    const [rc3, crc3] = React.useState(35);
    const [gc3, grc3] = React.useState(3);
    const [bc3, brc3] = React.useState(33);

    const [show, cshow] = React.useState(false)

    const [arr, carr] = React.useState([]);
    const [arr1, carr1] = React.useState([]);

    const getrandom = (min, max) => {
        const floatRandom = Math.random()
        const difference = max - min;
        const random = Math.round(difference * floatRandom)
        const randomWithinRange = random + min
        return randomWithinRange
    }

    React.useEffect(() => {
        fillclr()
    }, [])

    const fillclr = () => {
        var arrs1 = []
        var arrs2 = []
        for (let i = 0; i < 250; i++) {
            arrs1.push(getrandom(6, 100));
            arrs2.push(getrandom(6, 100));
        }
        carr(arrs1);
        carr1(arrs2);
    }
    const Backbox = () => {
        return (
            <div className='box'>
                {
                    arr.map((i, j) => {
                        return (<>
                            <div key={Math.random()} style={{ top: `${i}%`, left: `${arr1[j]}%` }}></div>
                        </>)
                    })
                }
            </div>
        )
    }
    return (
        <>
            <Backbox />
            {/* <div className='heroimg'>
                <img src={wietry} className='heroimg1' alt="sideimg"/>
            </div> */}
            <div id="home" className={`hero-main ${show ? '' : ''}`} style={{
                "--rc1": rc1, "--gc1": gc1, "--bc1": bc1,
                "--rc2": rc2, "--gc2": gc2, "--bc2": bc2, "--rc3": rc3, "--gc3": gc3, "--bc3": bc3
                }}>
                <div className='heading-hero'>
                    <h1 className='heading-main'>
                        <span className='first-letter'>W</span>omen <br/><span className='first-letter'>&#160;I</span>n <br/><span className='first-letter'>E</span>ngineering
                    </h1>
                    <h4 className='hero-subheading'>DELHI TECHNOLOGICAL UNIVERSITY</h4>
                </div>
            </div>


        </>
    )

}

export default Hero



{/* <div className="circle-spin">
    <div className="content-circle">
        <div id="chart-circle">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="400" height="400" viewPort="400, 400">
                <circle width="40" height="400" className="circle" cx="200" cy="200" r="250" fill="none" strokeDasharray="2, 20" />
            </svg> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="400" height="400" viewPort="400, 400">
                <circle width="40" height="400" className="circle" cx="200" cy="200" r="250" fill="none" strokeDasharray="2, 20" />
            </svg>
        </div>
    </div>
</div> */}
// const backcolor = () => {
//     var l1 = 16;
//     var h1 = 76;
//     var l2 = 1;
//     var h2 = 13;
//     var l3 = 33;
//     var h3 = 124;
//     crc1(getrandom(l1, h1));
//     crc2(getrandom(l1, h1));
//     crc3(getrandom(l1, h1));
//     grc1(getrandom(l2, h2));
//     grc2(getrandom(l2, h2));
//     grc3(getrandom(l2, h2));
//     brc1(getrandom(l3, h3));
//     brc2(getrandom(l3, h3));
//     brc3(getrandom(l3, h3));
// }