import { Carousel } from 'flowbite-react';
import React from 'react';

const Carousal = () => {
    return (
        <div className="h-56 w-3/4 mx-auto mt-16 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <img
                    src="https://i.ibb.co/Cv4kcYL/slider-main.webp"
                    alt="..."
                />
                <img
                    src="https://i.ibb.co/3p4MQXN/slider-2.webp"
                    alt="..."
                />
                <img
                    src="https://i.ibb.co/G2B4CmM/slider-3.webp"
                    alt="..."
                />           
            </Carousel>
        </div>
    );
};

export default Carousal;