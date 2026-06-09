import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState('');

  const handleForm = (e) => {
    e.preventDefault();//page will not reload
    console.log("handle form by!", title);
    setTitle('');
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value= {title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
