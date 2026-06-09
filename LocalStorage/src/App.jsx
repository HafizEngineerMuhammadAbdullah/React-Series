import React from 'react'

const App = () => {
  // localStorage.clear();
  // sessionStorage.clear();
  localStorage.setItem('userName' , 'Prof Abdullah');
  localStorage.setItem('age', '18');
  let name = localStorage.getItem('userName');
  let age = localStorage.getItem('age');
  localStorage.removeItem('userName');
  localStorage.removeItem('age');
  console.log(name);
  console.log(age); 

  const user = {
    userName : 'Dr Abdullah',
    qualification: 'Graduated',
    age : 18,
    city : 'karachi',
    address : 'House no : L-444 sector 5A/2 North Karachi',
  }

   localStorage.setItem('user',JSON.stringify(user));

   const myUser = JSON.parse(localStorage.getItem('user'));

   console.log(myUser);
   console.log(typeof(myUser));
   
  return (
    <div>
      App
    </div>
  )
}

export default App
