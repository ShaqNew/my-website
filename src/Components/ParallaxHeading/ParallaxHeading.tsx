import React from "react";
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import './parallaxHeading.scss'
import bg from "../../utils/PNGs/StarBackground.jpeg"

const ParallaxHeading = (props:any) => {
    const {image, text} = props;
    return (
        <div className="PHImage">
            <ParallaxBanner
            layers={[{ image: image, speed: -15 }]}
            className="aspect-[2/1]"
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <Parallax easing='easeOut' endScroll={-10} scale={[0.01,1.1]}>
                        <h1>{text}</h1>
                    </Parallax>
                </div>
            </ParallaxBanner>

            {/* <ParallaxBanner
                layers={[
                    { image: '../../utils/PNGs/StarBackground.jpeg', speed: -20 },
                    { image: '../../utils/PNGs/city-skyline-silhouette2.webp', speed: -10 },
                ]}
                className="aspect-[2/1]"
            /> */}

        {/* <ParallaxBanner
          layers={[
            { image: "../../utils/PNGs/StarBackground.jpeg", speed: -20 },
            {
              speed: -15,
              children: (
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-8xl text-white font-thin">Hello World!</h1>
                </div>
              ),
            },
            { image: '../../utils/PNGs/city-skyline-silhouette2.webp', speed: -10 },
          ]}
          className="aspect-[2/1]"
        /> */}
        </div>
    )
}
export default ParallaxHeading;