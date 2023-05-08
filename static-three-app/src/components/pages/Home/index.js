import React from 'react';
import useScroll from '@/utils/useScroll' 
import BackgroundCanvas from "@/components/three/BackgroundCanvas";
import { ScrollBox, FaceBox } from "@/components/ScrollBox";
import Landing from '../faces/Landing';
import Buzz from '../faces/Buzz';
import Education from '../faces/Education';
import Career from '../faces/Career';

const Home = () => {    
    const scroll = useScroll();
    
    return (
        <>
            <BackgroundCanvas scrollY={scroll} />
            <ScrollBox count={5}>
                <FaceBox position={0}><Landing contactPage={4} /></FaceBox>
                <FaceBox position={1}><Buzz /></FaceBox>
                <FaceBox position={2}><Education /></FaceBox>
                <FaceBox position={3}><Career /></FaceBox>
                <FaceBox position={4}>test</FaceBox>
                <FaceBox position={5}>test</FaceBox>
            </ScrollBox>
        </>
    )
}

export default Home