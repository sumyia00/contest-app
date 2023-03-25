import React, { useState } from 'react';

function User() {
  const [selectedOption, setSelectedOption] = useState('');
  const [options, setOptions] = useState(['Option 1', 'Option 2', 'Option 3', 'Option 4']);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleTextboxChange = (event, index) => {
    const newOptions = [...options];
    newOptions[index] = event.target.value;
    setOptions(newOptions);
  };

  return (
    

    <div className="container mx-auto px-4">
      <fieldset className="border border-gray-500 p-6 rounded-lg">
      <input class=" text-3xl font-bold shadow appearance-none border border-gray-500 rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Question" type="text" placeholder="Question  "/>
        {/* <legend className="text-lg font-bold">questions</legend> */}
        {options.map((option, index) => (
          <div className="flex items-center" key={index}>
            
            <input
              type="radio"
              name="radio-set"
              id={`radio-${index}`}
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
              className="mr-4"
            />
            <input
              type="text"
              name={`tb${index}`}
              value={option}
              placeholder={`Option ${index + 1}`}
              onChange={(event) => handleTextboxChange(event, index)}
              className="border border-gray-500 px-10 py-2 rounded"
            />
          </div>
        ))}
      </fieldset>
      <br />
      <br />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-10 text-3xl rounded focus:outline-none focus:shadow-outline" type="button">
                            ok
                        </button>

      
    </div>
  );
}

export default User;
