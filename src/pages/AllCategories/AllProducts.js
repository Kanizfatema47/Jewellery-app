import React from 'react';
import picture from '../../assests/bridal/img4.png';
import picture2 from '../../assests/bridal/img3.png';
import picture3 from '../../assests/bridal/img2.png';
import picture4 from '../../assests/bridal/img5.jpg';

const AllProducts = () => {
    return (
        <div>
            <section class="text-gray-600 body-font py-16 bg-third">
                <div class="container px-5 mx-auto">
                <h1 className='text-4xl mx-auto text-center my-8'>All Categories</h1>

                    <div class="flex flex-wrap -m-4">

                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-auto  overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full  bg-white block" src={picture4} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Bridal</h2>
                                <p class="mt-1">$16.00</p>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-auto rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={picture4} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Bridal</h2>
                                <p class="mt-1">$21.15</p>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-auto rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={picture4} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Bridal</h2>
                                <p class="mt-1">$12.00</p>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-auto rounded-2xl overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={picture4} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Bridal</h2>
                                <p class="mt-1">$18.40</p>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-auto rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={picture4} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium"> Bridal</h2>
                                <p class="mt-1">$16.00</p>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-auto rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={picture4} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Bridal</h2>
                                <p class="mt-1">$21.15</p>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-auto rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={picture4} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Bridal</h2>
                                <p class="mt-1">$12.00</p>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-auto rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={picture4} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Bridal</h2>
                                <p class="mt-1">$18.40</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllProducts;