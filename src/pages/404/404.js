import React from 'react';

const Error = () => {
    return (
        <div>
            <div class="flex items-center justify-center h-screen">
                <div class="flex-col space-y-4 text-left px-6">
                    <div class="text-7xl font-bold text-violet-700">404</div>
                    <div class="text-stone-500 font-medium">Oops, you still haven't found what you lookng for?</div>
                    <div class="flex space-x-4 items-center justify-start">
                        <a href="#"><div class="bg-violet-700 px-4 py-1 text-white font-medium border-2 border-gray-400  hover:scale-105 cursor-pointer"><ion-icon name="arrow-back-sharp"></ion-icon></div></a>
                        <div class="text-sm font-medium text-stone-500">Back to Home Page</div>
                    </div>
                </div>
            </div>



            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </div>
    );
};

export default Error;