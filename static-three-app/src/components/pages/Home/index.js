import React, { useState, useEffect, useCallback } from 'react';
import BackgroundCanvas from "@/components/three/BackgroundCanvas";
import Textbox from "@/components/Textbox";
import loremIpsum from '../../../utils/loremIpsum'

const Home = () => {
    
    const [scrollY, setScrollY] = useState(0);
    const onScroll = useCallback(event => {
        const { scrollY } = window;
        setScrollY(window.pageYOffset);
    }, []);
  
    useEffect(() => {
      window.addEventListener("scroll", onScroll, { passive: true });
      // prevent memory leak
      return () => {
         window.removeEventListener("scroll", onScroll, { passive: true });
      }
    }, []);
    
    return (
        <>
            <BackgroundCanvas scrollY={scrollY} />
            <div className="relative z-10 flex flex-col items-center">
                <Textbox text={'This is a sample site to show next.js and three.js'}/>
                <Textbox text={loremIpsum[0]}/>
                <Textbox text={loremIpsum[1]}/>
                <Textbox text={loremIpsum[2]}/>
                <Textbox text={loremIpsum[3]}/>
                <Textbox text={loremIpsum[4]}/>
            </div>
        </>
    )
}

export default Home