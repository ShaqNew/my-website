import React from "react";
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

const ParallaxImage = () => {
    return (
        <div className="PImage">
            <ParallaxBanner
            layers={[{ image: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Stars_and_Mountains.jpg', speed: -15 }]}
            className="aspect-[2/1]"
            />
        </div>
    )
}
export default ParallaxImage;