import React from 'react';


const login = () => {
    return (
        <div>
            
            <div class="w-full max-w-xs">
                <h1 class="font-bold  text-5xl    ">
                    Add Question
                </h1>
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        
                        <input class="font-bold text-4xl shadow appearance-none border rounded  py-3 px-15 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Question" type="text" placeholder="Question   "/>
                        </div>

                    <div class="mb-6">
                        
                        <input class=" font-bold text-xl shadow appearance-none border border-black-700 rounded w-full py-3 px-7 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Ans1" type="Ans1" placeholder="Ans1" />
                        <input class=" font-bold text-xl shadow appearance-none border border-black-700 rounded w-full py-3 px-7 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Ans2" type="Ans2" placeholder="Ans2" />
                        <input class=" font-bold text-xl shadow appearance-none border border-black-700 rounded w-full py-3 px-7 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Ans3" type="Ans3" placeholder="Ans3" />
                        <input class=" font-bold text-xl shadow appearance-none border border-black-700 rounded w-full py-3 px-7 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Ans3" type="Ans4" placeholder="Ans4" />

                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white text-4xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Add
                        </button>

                    </div>
                </form>

            </div>

        </div>
    );
};
export default login;