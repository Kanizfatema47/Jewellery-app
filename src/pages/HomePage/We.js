import React from 'react';
import img1 from '../../assests/random/img.jpg' 
import img2 from '../../assests/random/img1.jpg' 
const we = () => {
    return (
        <div>
                <h1 className='text-4xl font-secondary text-gray mx-auto text-center my-8'>What We Do</h1>


            <div class="flex justify-center  ">
                <div class="flex flex-col md:flex-row space-y-2 justify-center max-w-7xl w-full">
                    <div class="w-full md:w-1/2 mx-12 flex items-end mb-[60px] ">
                        <div class="flex flex-col">
                            <div class=" w-full flex space-x-1">
                                <h1 className='mb-12 text-lg text-black mt-[-20px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, temporibus.</h1>
                            </div>
                            <div class="h-full w-full overflow-hidden  ">
                                <img src={img1} alt="" class="h-full w-full rounded-lg" />

                            </div>

                        </div>
                    </div>



                    <div class="w-full md:w-1/2 mx-12 ">
                        <div class="flex flex-col">
                            <div class="h-full w-full   overflow-hidden  ">
                                <img src={img2} alt="" class="h-full w-full rounded-lg" />

                            </div>
                            <div class="h-48 w-full flex space-x-1 p-2">
                                <h1 className='mt-12 text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, pariatur!</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default we;