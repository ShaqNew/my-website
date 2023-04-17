import React from "react";
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import './parallaxHeading.scss'

const ParallaxHeading = (props:any) => {
    const {image, text} = props;
    return (
        // <div className="PHImage">
            <ParallaxBanner
            layers={[{ image: image, speed: -15 }]}
            className="aspect-[2/1]"
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <Parallax easing='easeOut' endScroll={-10} scale={[.8,1]}>
                        <h1>{text}</h1>
                    </Parallax>
                </div>
            </ParallaxBanner>
        // </div>
    )
}
export default ParallaxHeading;