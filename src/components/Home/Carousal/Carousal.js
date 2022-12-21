import { Carousel } from 'flowbite-react';
import React from 'react';

const Carousal = () => {
    return (
        <div className=" w-3/4 mx-auto mt-16 sm:h-64 xl:h-80 2xl:h-[300px] ">
            <Carousel>
                <img
                    src="https://www.thephotoargus.com/wp-content/uploads/2021/04/creative-photography-ideas-feature.jpg"
                    alt="..."
                    className='object-cover'
                />
                <img
                    src="https://iso.500px.com/wp-content/uploads/2016/03/pedroquintela-1500x844.jpg"
                    alt="..."
                    className='object-cover'
                />
                <img
                    src="https://i.ytimg.com/vi/g4PnSxj5eOE/maxresdefault.jpg"
                    alt="..."
                    className='object-cover'
                />           
            </Carousel>
        </div>
    );
};

export default Carousal;