import React from 'react';
import image from '../../assests/blogs/blog1.jpg'
import image2 from '../../assests/blogs/blogs2.jpg'
import image3 from '../../assests/blogs/blog3.jpg'


const Blogs = () => {
    return (
        <div class="flex justify-center bg-third">
            <div class="flex flex-col max-w-7xl justify-center items-center">
                <div class="overflow-hidden w-3/4 bg-white m-4 rounded-lg shadow-lg flex flex-col md:flex-row justify-center">
                    <div class="h-full w-full overflow-hidden"> <img src={image}
                        alt="" class="h-full w-full" /> </div>
                    <div class="grid p-2">
                        <div class="text-gray text-sm mt-8 m-2 ">September 9, 2022 -By Admin</div>

                        <div class="font-bold text-lg text-black m-2 ">Love is like wildflowers; it is often found in the
                            most unlikely places. </div>
                        <div class="text-gray m-2 text-sm"><a href="">Flowers are a beautiful way to show your appreciation
                            for someone. They are also a great way to show your love. Flowers can be delivered in a variety
                            of ways, including through mail, messenger, or even in person.</a></div>
                    </div>
                </div>
                <div class="overflow-hidden w-3/4 rounded-lg bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
                    <div class="grid p-2">
                    <div class="text-gray text-sm mt-8 m-2 ">September 9, 2022 -By Admin</div>

                        <div class="font-bold text-lg text-black m-2">However alert we are, antiquity remains an unknown,
                            unanticipated galaxy. </div>
                        <div class="text-gray m-2 text-sm"><a href="">The Universe is a vast and ever-expanding place. It is
                            composed of an estimated 100 billion galaxies, each with billions of stars. It is estimated that
                            there are as many as 100 billion galaxies in the observable universe. </a></div>
                    </div>
                    <div class="h-full w-full overflow-hidden"> <img src={image2} alt=""
                        class="h-full w-full" /> </div>
                </div>
                <div class="overflow-hidden w-3/4 rounded-lg bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
                    <div class="h-full w-full overflow-hidden"> <img src={image3}
                        alt="" class="h-full w-full" /> </div>
                    <div class="grid p-2">
                    <div class="text-gray text-sm mt-8 m-2 ">September 9, 2022 -By Admin</div>

                        <div class="font-bold text-lg text-black m-2">It is the friends you can call up at 4 a.m. that
                            matter. Lorem ipsum dolor sit amet.</div>
                        <div class="text-gray m-2 text-sm"><a href="">The bond of friendship is one that is often unspoken
                            and unrivaled. It is a relationship that is founded on mutual respect and understanding.
                            Friendship is something that can be found in all walks of life, and is often the foundation of a
                            successful life. </a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;