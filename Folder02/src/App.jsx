import React from 'react'
import Card from './assets/components/card'


const App = () => {
const jobs = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    company: "Google",
    time: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    company: "Apple",
    time: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    company: "Microsoft",
    time: "1 day ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Noida, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    company: "Amazon",
    time: "3 days ago",
    post: "SDE Intern",
    tag1: "Internship",
    tag2: "Entry Level",
    pay: "$30/hr",
    location: "Chennai, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
    company: "Meta",
    time: "6 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Expert Level",
    pay: "$90/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    company: "Netflix",
    time: "4 days ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Remote"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
    company: "Adobe",
    time: "2 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$40/hr",
    location: "Delhi, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
    company: "Tesla",
    time: "7 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Pune, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    company: "NVIDIA",
    time: "3 days ago",
    post: "Graphics Engineer",
    tag1: "Full Time",
    tag2: "Expert Level",
    pay: "$95/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    company: "IBM",
    time: "5 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Kolkata, India"
  }
];
  return (
    <div className='cards'>
      {jobs.map(function(elems,idx){
      return <div id='idx'>
        <Card logo ={elems.logo} company={elems.company} time={elems.time}post={elems.post}tag1={elems.tag1}tag2={elems.tag2}pay={elems.pay}location={elems.location}/>
        </div>
})}
    </div>
  )
}

export default App
