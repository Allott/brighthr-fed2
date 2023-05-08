import React from 'react';
import useScroll from '@/utils/useScroll' 
import BackgroundCanvas from "@/components/three/BackgroundCanvas";
import { ScrollBox, FaceBox } from "@/components/ScrollBox";
import Landing from '../faces/Landing';
import Buzz from '../faces/Buzz';
import Education from '../faces/Education';

const Home = () => {    
    const scroll = useScroll();
    
    return (
        <>
            <BackgroundCanvas scrollY={scroll} />
            <ScrollBox count={7}>
                <FaceBox position={0}><Landing contactPage={2} /></FaceBox>
                <FaceBox position={1}><Buzz /></FaceBox>
                <FaceBox position={2}><Education /></FaceBox>
                <FaceBox position={3}>test</FaceBox>
                <FaceBox position={4}>test</FaceBox>
                <FaceBox position={5}>test</FaceBox>
                <FaceBox position={6}>test</FaceBox>
                <FaceBox position={7}>test</FaceBox>
            </ScrollBox>
        </>
    )
}

export default Home