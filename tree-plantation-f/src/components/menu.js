import React from 'react';

const Menu = () => {
  return (
    <div>
    <nav className=" flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-3xl tracking-tight">Quiz</span>
      </div>
      <div className="block lg:hidden">
        <button className=" flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="/add" className="text-3xl block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4">
            Add
          </a>
          <a href="/list" className="text-3xl block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4">
            List
          </a>
          <a href="#responsive-header" className="text-4xl block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white">
            Logout
          </a>
        </div>
        <div>
          
        </div>
      </div>
    </nav>
    <h1 class="font-bold text-gray-500 text-center text-8xl py-40">Wellcome to quiz app</h1>
    </div>
  );
};

export default Menu;