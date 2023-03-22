import React from "react";
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import './parallaxHeading.scss'

const ParallaxHeading = () => {
    return (
        <div className="PHImage">
            <ParallaxBanner
            layers={[{ image: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Stars_and_Mountains.jpg', speed: -15 }]}
            className="aspect-[2/1]"
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <Parallax easing='easeOut' endScroll={-10} scale={[0.01,2]}>
                        <h1>About Me</h1>
                    </Parallax>
                </div>
            </ParallaxBanner>
        </div>
    )
}
export default ParallaxHeading;