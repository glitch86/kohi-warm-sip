import { Testimonial } from '@/types/testimonials';
import { Quote } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type Props ={
    testimony: Testimonial
}

const TestimonialCard = ({testimony}: Props) => {
    // console.log(testimony)
    return (
        <div className='my-6'>
            <div>
                <Quote></Quote>
                <h1>
                    {testimony.testimony}
                </h1>
            </div>
            <div className='flex items-center gap-2 my-5'>
                <div className=''>
                    <Image className='rounded-full' src={testimony.pfpUrl} width={50} height={50} alt='user'></Image>
                </div>
                <div>
                    <h4 className='font-semibold'>
                        {testimony.username}
                    </h4>
                    <p className='text-[12px] -mt-2 text-secondary'>
                        {testimony.profession}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;