import React from "react";

const Card = (props) => {
    console.log(props);
    console.log(props.user);
    console.log(props.age);
    console.log(props.img);
    
    
    
  return (
      <div className="card">
        <img
          src= {props.img}
          alt=""
        />
        <h1>{props.user} Developer</h1>
        <h2>Age : {props.age}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nostrum
          sunt magni debitis corporis maiores qui iusto dolorem. Autem
          obcaecati, tempora nesciunt consequatur quod tenetur eveniet eius
          aperiam in et!
        </p>
        <button>View Profile</button>
      </div>
  );
};

export default Card;
