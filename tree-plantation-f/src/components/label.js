import React, { useState } from 'react';

function Label() {
  const [selectedOption, setSelectedOption] = useState('');
  const [options, setOptions] = useState(['Option 1', 'Option 2', 'Option 3', 'Option 4']);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    

    <div className="container mx-auto px-8 py-6">
      <fieldset className="border border-gray-700 p-8   rounded-lg">
      <label class="font-bold text-3xl py-6 px-3 " >Question</label>
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
            <label>{option}</label>
          </div>
        ))}
      </fieldset>
      <br />
      <br />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 text-3xl rounded focus:outline-none focus:shadow-outline" type="button">
                            submit
                        </button>

      
    </div>
  );
}

export default Label;
