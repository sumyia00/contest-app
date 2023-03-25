import React, { useState, useEffect } from "react";

function Label() {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/33be4a5f-1b85-4c1e-8d5e-7dff06fee48b")
      .then((response) => response.json())
      .then((data) => setListData(data));
  }, []);

  return (
    <div>
      <h1>List Data</h1>
      <ul>
        {listData.map((item, index) => (
            <div className="flex items-center" key={index}>
            
            <input
              type="radio"
              name="radio-set"
              id={`radio-${index}`}
              value={item.ans1}
              className="mr-4"
            />
            <label>{item.ans1}</label>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Label;