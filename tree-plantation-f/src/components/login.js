import React from 'react';
import { BrowserRouter, Routes, Route, Switch, Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div class="w-full max-w-xs">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2 " for="username">
                            Username
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="username    "/>
                        
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input class="shadow appearance-none border border-blue-400 rounded w-full py-3 px-5 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p class="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <Link class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded focus:outline-none focus:shadow-outline" to="/menu">Sign in</Link>
                    </div>
                </form>

            </div>

        </div>
    );
};
export default Login;