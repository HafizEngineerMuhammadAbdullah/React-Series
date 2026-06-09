import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import Arrow from './Arrow';
import HeroText from './HeroText';

const LeftContent = () => {
    return (
        <div className='h-full w-1/3 flex flex-col justify-between px-1'>
            <HeroText />
            <Arrow />
        </div>
    )
}

export default LeftContent;
