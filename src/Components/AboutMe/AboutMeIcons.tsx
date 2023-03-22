import React from "react";
import { Parallax } from 'react-scroll-parallax';
import bigBen from '../../utils/icons/big-ben.png'
import gherkin from '../../utils/icons/gherkin.png'
import londonEye from '../../utils/icons/london-eye.png'

const AboutMeIcons = () => {
    return (
        <div className="AboutMeIcons" >
            <div className="AboutMeIcons__BigBen">
                <Parallax translateY={[50,0]} startScroll={1} endScroll={800}>
                    <img className="AboutMeIcons__BigBen" src={bigBen} alt="Big Ben Icon"/>
                </Parallax>
            </div>
            <div className="AboutMeIcons__Gherkin">
                <Parallax easing={"easeInQuint"} translateY={[100,0]} startScroll={10} endScroll={700}>
                    <img className="AboutMeIcons__Gherkin" src={gherkin} alt="Gherkin Icon"/>
                </Parallax>
            </div>
            {/* <div className="AboutMeIcons__LondonEye">
                <Parallax easing={"easeIn"} translateX={[100,0]} startScroll={100} endScroll={700}>
                    <img className="AboutMeIcons__LondonEye" src={londonEye} alt="London Eye Icon"/>
                </Parallax>
            </div> */}
        </div>
    )
}

export default AboutMeIcons;