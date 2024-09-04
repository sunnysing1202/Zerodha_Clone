import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';


import OpenAccount from '../OpenAccount';

function HeroPage() {
    return ( 
       <>
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
       </>
     );
}

export default HeroPage;