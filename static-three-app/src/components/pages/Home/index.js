import React from 'react';
import useScroll from '@/utils/useScroll/useScroll' 
import BackgroundCanvas from "@/components/three/BackgroundCanvas";
import { ScrollBox, SideBox } from "@/components/ScrollBox";
import loremIpsum from '../../../utils/loremIpsum'

const Home = () => {    
    const scroll = useScroll();
    
    return (
        <>
            <BackgroundCanvas scrollY={scroll} />
            <ScrollBox count={8}>
                <SideBox position={0}>test</SideBox>
                <SideBox position={1}>test</SideBox>
                <SideBox position={2}>test</SideBox>
                <SideBox position={3}>test</SideBox>
                <SideBox position={4}>test</SideBox>
                <SideBox position={5}>test</SideBox>
                <SideBox position={6}>test</SideBox>
                <SideBox position={7}>test</SideBox>
            </ScrollBox>
        </>
    )
}

export default Home