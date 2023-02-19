import React from 'react';
import img from '../../assests/user/pic1.jfif'
const Testimonials = () => {
    return (
        <div>
            <div class="flex justify-center my-16">
                <div class="flex flex-col justify-center items-center ">
                    <div class=" text-2xl md:text-5xl font-medium flex my-8">
                        <div>Testimonials By </div>
                        <div class="text-fourth mx-1"> Trusted</div>
                    </div>
                    <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center ">

                        <div class="overflow-hidden w-full m-4 flex justify-center   md:w-[33%]  shadow-xl bg-fourth">

                            <div class="flex flex-col md:flex-row items-center justify-center  bg-white rounded-tl-full ">
                                <div class="  items-center justify-center flex py-2">
                                    <div class="flex flex-col  items-center justify-center ">
                                        <div class="flex items-center">
                                            <div class="p-1 bg-white rounded-full">

                                            <img src={img} alt="" class="w-32 h-32 rounded-full" />
                                            </div>
                                            <div>
                                                <div class="font-bold text-black mx-4">John Doe</div>
                                                <div class="text-sm font-medium text-gray hover:text-gray mx-4"><a
                                                    href="#">Board Director of MJ</a></div>
                                            </div>
                                        </div>
                                        <div class="text-gray  m-2 px-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores odio quibusdam iure commodi incidunt nulla eligendi, corporis rerum illum illo nobis ut nihil, asperiores ipsa, sint culpa officiis! Eum nisi, </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="overflow-hidden w-full m-4 flex justify-center   md:w-[33%]  shadow-xl bg-fourth">

                            <div class="flex flex-col md:flex-row items-center justify-center  bg-white rounded-tl-full ">
                                <div class="  items-center justify-center flex py-2">
                                    <div class="flex flex-col  items-center justify-center ">
                                        <div class="flex items-center">
                                            <div class="p-1 bg-white rounded-full">

                                            <img src={img} alt="" class="w-32 h-32 rounded-full" />
                                            </div>
                                            <div>
                                                <div class="font-bold text-black mx-4">Elina Gilbert</div>
                                                <div class="text-sm font-medium text-gray hover:text-gray mx-4"><a
                                                    href="#">ShareHolder, MJ</a></div>
                                            </div>
                                        </div>
                                        <div class="text-gray  m-2 px-8"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae culpa eum maxime sint tempora, quasi perspiciatis. Maiores id molestias, est perspiciatis dolorem vero nam atque, placeat blanditiis vel laborum, doloremque fugiat </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="overflow-hidden w-full m-4 flex justify-center   md:w-[33%]  shadow-xl bg-fourth">

                            <div class="flex flex-col md:flex-row items-center justify-center  bg-white rounded-tl-full ">
                                <div class="  items-center justify-center flex py-2">
                                    <div class="flex flex-col  items-center justify-center ">
                                        <div class="flex items-center">
                                            <div class="p-1 bg-white rounded-full">

                                                <img src={img} alt="" class="w-32 h-32 rounded-full" />
                                            </div>
                                            <div>
                                                <div class="font-bold text-black mx-4">Josh Reacher</div>
                                                <div class="text-sm font-medium text-gray hover:text-gray mx-4"><a
                                                    href="#">CEO, MJ</a></div>
                                            </div>
                                        </div>
                                        <div class="text-gray  m-2 px-8"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci porro unde amet hic voluptates. Ratione beatae nulla libero cum accusamus quo dignissimos, doloribus deserunt quis odio optio nisi ipsam magni eum praesentium!</div>

                                    </div>
                                </div>

                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;