import React from 'react';

import image from '../../assests/random/img4.jpg'
const ContactUs = () => {

    return (
        <div class="flex justify-center ">
            <div class="flex lg:flex-row flex-col  max-w-7xl m-4 ">
                <div class="lg:w-1/2 bg-gray-light  justify-center flex items-center md:w-full sm:w-full">
                    <div class="flex justify-center flex-col items-center">
                        <div class="text-black  text-4xl font-secondary my-0 sm:my-5 "> Contact Us </div>
                        <div class="text-black front-main mt-8 mb-8 text-lg text-center "> We are always here to help out whatever way we can  </div>
                        <div class="text-black flex flex-col w-72 ">
                            <div class=" mt-3 ">
                                <input placeholder="Name"
                                    class=" p-2 rounded-3xl w-full" />
                            </div>
                            <div class=" mt-3">
                                <input placeholder="E-mail"
                                    class=" p-2 rounded-3xl w-full" />
                            </div>
                            <div class=" mt-3">
                                <input placeholder="Phone"
                                    class=" p-2 rounded-3xl w-full" />
                            </div>
                            <div class=" mt-3">
                                <input
                                    placeholder="Type your message" class=" p-2 rounded-3xl w-full" />
                            </div>
                            <div class="block m-2justify-center mt-5">
                                <div class="bg-brown p-2 rounded-3xl mb-0 md:mb-3 sm:mb-5 text-white hover:bg-black cursor-pointer ">
                                    <div class="flex justify-center  "> Send </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:w-full lg:w-1/2 h-full sm:w-full sm:my-5 my-0">
                    <img src={image} alt='' className='h-full' />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;