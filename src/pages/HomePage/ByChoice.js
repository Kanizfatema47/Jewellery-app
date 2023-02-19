import React from 'react';
import ring from '../../assests/choice/ring.png'
import earrings from '../../assests/choice/earrings.png'
import bracelet from '../../assests/choice/bracelets.png'
import bangles from '../../assests/choice/bangles.png'
import necklace from '../../assests/choice/necklace.png'
import nosepin from '../../assests/choice/nosepin.png'
const ByChoice = () => {
    return (
        <div class="flex items-center justify-center text-center my-16">
            <div class="flex flex-col justify-center items-center ">
                <div class="text-3xl font-normal text-black-light  my-8 font-secondary">Products By Choice</div>
                <div class=" grid grid-cols-3 gap-x-32 gap-y-8 items-center justify-center ">

                    <div class="flex flex-col justify-center items-center ">

                        <img src={ring} alt="" class=" h-16 " />

                        <div class=" italic text-gray">Rings</div>
                    </div>
                    <div class="flex flex-col justify-center items-center  ">

                        <img src={earrings} alt="" class="h-16" />

                        <div class=" italic text-gray">Earrings</div>
                    </div>
                    <div class="flex flex-col justify-center items-center ">

                        <img src={bangles} alt="" class="h-16" />

                        <div class=" italic text-gray">Bangles</div>
                    </div>
                </div>
                <div class=" grid grid-cols-3 gap-x-24 mt-8 items-center justify-center ">

                    <div class="flex flex-col justify-center items-center ">

                        <img src={bracelet} alt="" class="h-16" />

                        <div class=" italic text-gray">Bracelets</div>
                    </div>
                    <div class="flex flex-col justify-center items-center ">

                        <img src={necklace} alt="" class=" h-16" />

                        <div class=" italic text-gray">Necklace</div>
                    </div>
                    <div class="flex flex-col justify-center items-center ">

                        <img src={nosepin} alt="" class=" h-16" />

                        <div class=" italic text-gray">Nose Pin</div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default ByChoice;