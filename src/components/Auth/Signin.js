import React from 'react';

const Signin = () => {
    return (
        <div>
            <div class="flex flex-col justify-center items-center h-screen bg-gradient-to-l from-purple to-pink">
                <div class=" md:w-auto w-[90%] p-8 rounded-xl  m-4 flex flex-col items-center shadow-lg border border-black opacity-90 ">
                    <div class="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 ">
                        <h1 class="font-semibold text-3xl text-black m-2">Log In</h1>
                    </div>
                    <div class="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
                        <div class="">
                            <div class="m-1 text-lg text-black text-semibold">Username</div>
                            <input type="text"
                                class="border-b border-black focus:outline-none  text-black placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"/>
                        </div>
                        <div class="">
                            <div class="m-1 text-lg text-black text-semibold">Password</div>
                            <input type="password"
                                class="border-b border-black focus:outline-none  text-black placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"/>
                        </div>

                    </div>
                    <div class="text-center mt-7">
                        <button
                            class="uppercase px-16 md:px-12 lg:px-16 py-2 rounded-md text-black bg-gradient-to-r from-purple to-pink  font-medium ">login</button>
                    </div>
                </div>
                <div class="text-center my-6 flex flex-col">
                    <a href="#" class="text-sm font-medium text-gray-400 hover:text-violet-500 m-1">Forgot
                        Password ?</a>
                    <a href="#" class="text-sm font-bold text-gray-400 hover:text-violet-500 m-1">
                        Not a User? Create New Account</a>
                </div>

            </div>
        </div>
    );
};

export default Signin;