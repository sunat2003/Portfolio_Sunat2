import React from "react";
import "./Projects.css";
import pro1 from '../../image/project-1.png';
import pro2 from '../../image/project-2.png';
import pro3 from '../../image/project-3.png';
import pro4 from '../../image/project-4.png';
import pro5 from '../../image/project-5.png';
import pro6 from '../../image/project-6.png';
import pro7 from '../../image/project-7.png';
import pro8 from '../../image/project-8.png';

var projects=[
    {
        id:1,
        image:pro1,
        name:"Video Meeting Project",
        description:"Implemented a simple video meeting application using Django and Zegocloud along with user authentication and authorization features.",
        sourceCode:"http://Sunat2003.pythonanywhere.com",
    },
    {
        id:2,
        image:pro2,
        name:"Content Creation App",
        description:"Implemented content creation ,listing ,deletion ,searching and updating with user authentication and authorization.",
        sourceCode:"https://github.com/sunat2003/Content-Create-Project-Djnago",
    },
    {
        id:3,
        image:pro3,
        name:"Odisha Tourism",
        description:"Developed a traveling application using React",
        sourceCode:"https://github.com/sunat2003/Odisha-Tourism-App",
    },
    {
        id:4,
        image:pro4,
        name:"E-commerce Website",
        description:"Developed a e-commerce website using HTML , CSS and JS.",
        sourceCode:"https://sunat2003.github.io/e-Commerce-website-Repo/",
    },
    {
        id:5,
        image:pro5,
        name:"Netflix Clone App",
        description:"Clone Netflix home page and login page using React",
        sourceCode:"https://sunat2003.github.io/Netflix-HomePage-Clone-React/",
    },
    {
        id:6,
        image:pro6,
        name:"Currency Converter",
        description:"Developed a Currency Converter app using React",
        sourceCode:"https://github.com/sunat2003/Js-USD-To-Any-Currency-Coverter",
    },
    {
        id:7,
        image:pro7,
        name:"React Redux ToDo App",
        description:"Developed a To-Do application using React Redux.",
        sourceCode:"https://sunat2003.github.io/React-Redux-ToDo-app-Repo/",
    }
    ,
    {
        id:8,
        image:pro8,
        name:"Employee Management System",
        description:"Designed to store employee details ,add ,remove ,update ,filter, and list employees.",
        sourceCode:"https://github.com/sunat2003/EmployeeManagement_Django_Repo"
    }
]

export function Project(){
    return(
        <section id="project" className="project-section">
            <h1>My Work</h1>
            <hr />
         <div className="projects-div">
          {
               projects.map(data=>
                    <div key={data.id} className="each-project">
                        <img src={data.image} alt="" />
                        <div className="each-project-details">
                        <h3>{data.name}</h3>
                        <p>{data.description}</p>
                        <p>Source Code: <a href={data.sourceCode}>{data.sourceCode}</a></p>
                        </div>
                    </div>
                )
          }
         </div>
        </section>
    )
}