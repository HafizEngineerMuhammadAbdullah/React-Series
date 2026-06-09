import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "/Images/google.jpg",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      payment: "$28 / hr",
      location: "Karachi, Pakistan",
    },
    {
      brandLogo: "/Images/microsoft.png",
      companyName: "Microsoft",
      datePosted: "2 weeks ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payment: "$45 / hr",
      location: "Lahore, Pakistan",
    },
    {
      brandLogo: "/Images/apple-logo.jpg",
      companyName: "Apple",
      datePosted: "10 days ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Mid Level",
      payment: "$35 / hr",
      location: "Islamabad, Pakistan",
    },
    {
      brandLogo: "/Images/meta.png",
      companyName: "Meta",
      datePosted: "3 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      payment: "$30 / hr",
      location: "Karachi, Pakistan",
    },
    {
      brandLogo: "/Images/amazon.webp",
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "Cloud Support Engineer",
      tag1: "Remote",
      tag2: "Senior Level",
      payment: "$50 / hr",
      location: "Remote",
    },
    {
      brandLogo: "/Images/Netflix-Symbol.png",
      companyName: "Netflix",
      datePosted: "4 weeks ago",
      post: "UI/UX Designer",
      tag1: "Contract",
      tag2: "Mid Level",
      payment: "$40 / hr",
      location: "Dubai, UAE",
    },
    {
      brandLogo: "/Images/nvidia1.jpg",
      companyName: "NVIDIA",
      datePosted: "6 days ago",
      post: "AI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payment: "$60 / hr",
      location: "San Francisco, USA",
    },
    {
      brandLogo: "/Images/tesla-logo.png",
      companyName: "Tesla",
      datePosted: "8 weeks ago",
      post: "Software Engineer",
      tag1: "Internship",
      tag2: "Junior Level",
      payment: "$22 / hr",
      location: "Berlin, Germany",
    },
    {
      brandLogo: "/Images/Adobe2.png",
      companyName: "Adobe",
      datePosted: "9 days ago",
      post: "JavaScript Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      payment: "$38 / hr",
      location: "Toronto, Canada",
    },
    {
      brandLogo: "/Images/openai2.png",
      companyName: "OpenAI",
      datePosted: "12 hours ago",
      post: "Machine Learning Engineer",
      tag1: "Remote",
      tag2: "Senior Level",
      payment: "$70 / hr",
      location: "Remote",
    },
  ];
  return (
    <div className="parent">
      {jobOpenings.map((job,index) => (
        <Card key={index}
          companyLogo={job.brandLogo}
          companyName={job.companyName}
          datePosted={job.datePosted}
          post={job.post}
          tag1={job.tag1}
          tag2={job.tag2}
          payment={job.payment}
          location={job.location}
        />
      ))}
    </div>
  );
};
export default App;
