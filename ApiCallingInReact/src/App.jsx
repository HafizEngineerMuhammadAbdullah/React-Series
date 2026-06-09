import React, { useState } from "react";
import axios from "axios";

const App = () => {

  const [data, setData] = useState([])
  const URL = `https://jsonplaceholder.typicode.com/users`;
  // const getData = async () => {
  //     const response = await fetch(URL);

  //     const data = await response.json();

  //     console.log(data);

  // }

  const getData = async () => {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const { data } = await axios.get("https://picsum.photos/v2/list");
    //  console.log(response);

    // console.log(response.data);
    // console.log(data);
    setData(data);
  };
  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  );
};

export default App;
