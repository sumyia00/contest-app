import React, { useState, useEffect} from 'react';

function Label() {

  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/33be4a5f-1b85-4c1e-8d5e-7dff06fee48b")
      .then((response) => response.json())
      .then((data) => setListData(data));
  }, []);

  return (
    

    <div className="container mx-auto px-8 py-6">
      {listData.map((item, index) => (          
          <><fieldset id={'fs-${index}'} className="border border-gray-700 p-8   rounded-lg">
          <label><b>{item.question}</b></label>
          <div className="flex items-center" key={index}>
            <input
              type="radio"
              name={'radio-${index}'}
              value={item.ans1}
              className="mr-4" />
            <label>{item.ans1}</label>
          </div>
          <div className="flex items-center" key={index}>
            <input
              type="radio"
              name={'radio-${index}'}
              value={item.ans2}
              className="mr-4" />
            <label>{item.ans2}</label>
          </div>
          <div className="flex items-center" key={index}>
            <input
              type="radio"
              name={'radio-${index}'}
              value={item.ans3}
              className="mr-4" />
            <label>{item.ans3}</label>
          </div>
          <div className="flex items-center" key={index}>
            <input
              type="radio"
              name={'radio-${index}'}
              value={item.ans4}
              className="mr-4" />
            <label>{item.ans4}</label>
          </div>
          </fieldset></>
        ))}
      
      <br />
      <br />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 text-3xl rounded focus:outline-none focus:shadow-outline" type="button">
                            submit
                        </button>

      
    </div>
  );
}

export default Label;