import React, { useEffect, useState } from "react";
import Card from "./component/Card";
import axios from "axios";
const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const URL = `https://picsum.photos/v2/list?page=${index}&limit=10`;
    let response = await axios.get(URL);
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className="text-xs text-blue-500 font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading....
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map((data, idx) => {
      return (
        <div>
          <Card key={idx} data={data} />
        </div>
      );
    });
  }
  
  return (
    <div className="bg-black h-screen p-4 text-white overflow-auto">
      {/* <button
        onClick={getData}
        className="bg-green-600 mb-3 px-5 py-2 text-white rounded-2xl cursor-pointer active:scale-95"
      >
        Get Data
      </button> */}
      <div className="h-[82%] flex flex-wrap gap-5 p-2">{printUserData}</div>
      <div className="flex justify-center items-center gap-6 p-4">
        <button
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          onClick={() => {
            if (index > 1) setIndex(index - 1);
            setUserData([]);
          }}
          className="bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95"
        >
          Prev
        </button>
        <h4>Page {index}</h4>
        <button
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
          className="bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
