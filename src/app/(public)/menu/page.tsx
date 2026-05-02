import CardContainer from '@/components/sections/menu/CardContainer';
import TopSection from '@/components/sections/menu/TopSection';
import React from 'react';

const Menu = () => {
    return (
        <div className='my-14 py-5 container mx-auto'>
            <TopSection></TopSection>
            <CardContainer></CardContainer>
        </div>
    );
};

export default Menu;