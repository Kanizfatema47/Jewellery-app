import React from 'react';
import image from '../../assests/random/pic1.jpg'
import image2 from '../../assests/random/pic2.jpg'
import image3 from '../../assests/random/pic3.jpg'
import image4 from '../../assests/random/pic4.jpg'
import image5 from '../../assests/random/pic5.jpg'
import image6 from '../../assests/random/pic6.jfif'
import image7 from '../../assests/random/pic7.jfif'
const Story = () => {
    return (
        <div className='my-24'>
       
            <div class="flex justify-center  ">
                <div class="flex flex-col items-center justify-center">

                    <div class="flex flex-col  max-w-7xl justify-center items-center space-y-3 w-full ">
                       
                        <div
                            class="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6   w-full items-center justify-center ">

                            <div class="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                                <img src={image} alt="" class="" />
                            </div>
                            <div class="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center">
                                <div class="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                                    <img src={image4} alt="" class="rounded-xl " />
                                </div>
                                <div class="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                                    <img src={image2} alt="" class="rounded-xl " />
                                </div>
                            </div>
                            <div class="lg:w-60 w-64 lg:h-full sm:h-96  overflow-hidden rounded-xl ">
                                <img src={image7} alt="" class="rounded-xl" />
                            </div>
                            <div class="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center ">
                                <div class="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                                    <img src={image6} alt="" class="rounded-xl " />
                                </div>
                                <div class="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                                    <img src={image5} alt="" class="rounded-xl " />
                                </div>
                            </div>
                            <div class="lg:w-40 w-64 lg:h-40 sm:h-60  overflow-hidden rounded-xl ">
                                <img src={image3} alt="" class="rounded-xl " />
                            </div>


                        </div>

                    </div>

                </div>

            </div>
            <div className='flex mt-8 justify-center items-center '>
            <button class="uppercase px-12 md:px-16 lg:px-24 py-2 font-main rounded-md text-black bg-gradient-to-r from-purple to-pink  font-medium ">View our story</button>

            </div>


        </div>
    );
};

export default Story;