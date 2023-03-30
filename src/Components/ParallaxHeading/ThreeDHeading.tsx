import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import StarBG from "../../utils/PNGs/StarBackground.jpeg"

const ThreeDHeading = () => {
    return (
        <ParallaxBanner
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
        />
      );
}

export default ThreeDHeading;