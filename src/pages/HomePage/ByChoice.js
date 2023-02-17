import React from 'react';
import ring from '../../assests/choice/ring.png'
import earrings from '../../assests/choice/earrings.png'
const ByChoice = () => {
    return (
            <div class="flex items-center justify-center text-center my-16">
                <div class="flex flex-col justify-center items-center ">
                    <div class="text-3xl font-medium my-8">Products By Choice</div>
                    <div class=" grid grid-cols-3 gap-x-32 gap-y-8 items-center justify-center ">

                        <div class="flex flex-col justify-center items-center ">

                            <img src={ring} alt="" class=" flex justify-center items-center" />

                            <div class=" italic text-gray">Rings</div>
                        </div>
                        <div class="flex flex-col justify-center items-center  ">

                            <img src={earrings} alt="" class="" />

                            <div class=" italic text-gray">Earrings</div>
                        </div>
                        <div class="flex flex-col justify-center items-center ">

                            <img src={ring} alt="" class=" flex justify-center items-center" />

                            <div class=" italic text-gray">Rings</div>
                        </div>
                    </div>
                    <div class=" grid grid-cols-3 gap-x-24 mt-8 items-center justify-center ">

                        <div class="flex flex-col justify-center items-center ">

                            <img src={earrings} alt="" class=" flex justify-center items-center" />

                            <div class=" italic text-gray">Earrings</div>
                        </div>
                        <div class="flex flex-col justify-center items-center ">

                            <img src={ring} alt="" class="" />

                            <div class=" italic text-gray">Rings</div>
                        </div>
                        <div class="flex flex-col justify-center items-center ">

                            <img src={earrings} alt="" class=" flex justify-center items-center" />

                            <div class=" italic text-gray">Earrings</div>
                        </div>

                    </div>
                </div>
            </div>

    );
};

export default ByChoice;