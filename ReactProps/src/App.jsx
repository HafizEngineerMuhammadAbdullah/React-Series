import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Abdullah"
        age={18}
        img="https://images.unsplash.com/photo-1742717817785-54249562494c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Khalid"
        age={38}
        img="https://plus.unsplash.com/premium_photo-1672021618005-b89f86e8d6bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
      />
      <Card user="Iqbal" age={30} img="https://images.unsplash.com/photo-1776105648206-fc6dd5fb0776?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  );
};

export default App;
