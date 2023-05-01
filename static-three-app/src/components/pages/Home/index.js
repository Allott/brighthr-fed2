import React from 'react';
import useScroll from '@/utils/useScroll/useScroll' 
import BackgroundCanvas from "@/components/three/BackgroundCanvas";
import Textbox from "@/components/Textbox";
import loremIpsum from '../../../utils/loremIpsum'

const Home = () => {    
    const scroll = useScroll();
    
    return (
        <>
            <BackgroundCanvas scrollY={scroll} />
            <div className="relative z-10 flex flex-col items-center">
                <Textbox text={'This is a sample site to show next.js and three.js'}/>
                <Textbox text={loremIpsum[0]}/>
                <Textbox text={loremIpsum[1]}/>
                <Textbox text={loremIpsum[2]}/>
                <Textbox text={loremIpsum[3]}/>
                <Textbox text={loremIpsum[4]}/>
                <Textbox text={loremIpsum[0]}/>
                <Textbox text={loremIpsum[1]}/>
                <Textbox text={loremIpsum[2]}/>
                <Textbox text={loremIpsum[3]}/>
                <Textbox text={loremIpsum[4]}/>
                <Textbox text={loremIpsum[0]}/>
                <Textbox text={loremIpsum[1]}/>
                <Textbox text={loremIpsum[2]}/>
                <Textbox text={loremIpsum[3]}/>
                <Textbox text={loremIpsum[4]}/>
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