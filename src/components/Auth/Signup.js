import React from 'react';

const Signup = () => {
    return (
        <div>
            <div class="flex flex-col justify-center items-center h-screen bg-gradient-to-l from-purple to-pink">
                <div class=" md:w-auto w-[90%] p-8 rounded-xl  m-4 flex flex-col items-center shadow-xl border border-black opacity-90 ">
                    <div class="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 ">
                        <h1 class="font-semibold text-3xl text-black m-2">Register</h1>
                    </div>
                    <div class="flex">
                        <a class="">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a class="ml-2 ">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a class="ml-2 ">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                        </a>

                    </div>
                    <div class="text-gray-700 font-semibold"> or </div>
                    <div class="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
                        <div class="">
                            <div class="m-1 text-lg text-black text-semibold">Name</div>
                            <input type="text"
                                class="border-b border-black focus:outline-none  text-black placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div class="">
                            <div class="m-1 text-lg text-black text-semibold">Email</div>
                            <input type="email"
                                class="border-b border-black focus:outline-none  text-black placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div class="">
                            <div class="m-1 text-lg text-black text-semibold">Password</div>
                            <input type="password"
                                class="border-b border-black focus:outline-none  text-black placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>


                    </div>
                    <div class="text-center mt-7">
                        <button
                            class="uppercase px-16 md:px-12 lg:px-16 py-2 rounded-md text-black bg-gradient-to-r from-purple to-pink  font-medium ">Submit</button>
                    </div>
                </div>
                <div class="text-center my-6 flex flex-col">
                    <a href="#" class="text-sm font-medium text-gray-400 hover:text-violet-500 m-1">Forgot
                        Password ?</a>
                    <a href="#" class="text-sm font-bold text-gray-400 hover:text-violet-500 m-1">
                        Already a User? Login Now</a>
                </div>

            </div>
        </div >
    );
};

export default Signup;