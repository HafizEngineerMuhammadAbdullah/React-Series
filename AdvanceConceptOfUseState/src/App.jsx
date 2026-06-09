import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [user, setUser] = useState({ name: "Abdul", age: 20 });
  const [admin, setAdmin] = useState({ name: "Abdul Khalid", age: 20 });

  const [arr, setArr] = useState([12, 23, 34]);

  const btnClicked = () => {
    const newUser = { ...user };
    const newArr = [ ...arr ];
    newArr.push(44,234);
    newUser.name = "Prof Abdullah";
    newUser.age = 2;
    setUser(newUser);
    setArr(newArr);
    setNum(prev => prev + 1);
    setNum(prev => prev + 1);
    setNum(prev => prev + 1);
    setAdmin(prev => ({...prev,name: 'Dr Abdullah',age:30}));
  };
  return (
    <div>
      <h1>{num} , {arr}</h1>
      <h1>{admin.name} , {admin.age}</h1>
      <h2>{num}</h2>
      <h2>
        {user.name} , {user.age}
      </h2>
      <button onClick={btnClicked}>Click here</button>
    </div>
  );
};

export default App;
