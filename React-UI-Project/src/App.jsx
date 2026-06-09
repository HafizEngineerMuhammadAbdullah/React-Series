import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Navbar from "./components/Section1/Navbar";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1579389083395-4507e98b5e67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww",
      intro: "",
      color: "royalblue",
      tag: "Satisfied",
    },
    {
      img: "https://media.istockphoto.com/id/2211808698/photo/smiling-businesswoman-holding-laptop-and-looking-away-near-office-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=2DKMXvDmJcnDWR0y7JR8LYSyA_OIEuL0qwpWs9c0S7Y=",
      intro: "",
      color: "lightseagreen",
      tag: "Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8fDA%3D",
      intro: "",
      color: "orange",
      tag: "Underbanked",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8fDA%3D",
      intro: "",
      color: "black",
      tag: "UnderJob",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww",
      intro: "",
      color: "yellow",
      tag: "Underemployment",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
