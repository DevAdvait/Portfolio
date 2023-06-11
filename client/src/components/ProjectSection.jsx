import { Card, Button } from "react-bootstrap";
import "../styles/projectSection.css";
import ToDoListImg from "../assets/todolist.jpg";
import CalculatorAppImg from "../assets/calculator-app.jpg";
import Badvait from "../assets/blogApp.jpg";
import GymChain from "../assets/gymChain.jpg";
import MovieApp from "../assets/movieApp.jpg";
import PricingTable from "../assets/pricingTable.jpg";
import DashBoard from "../assets/dashboard-template.jpg";
import Pagin from "../assets/pagination.jpg";
import RestCount from "../assets/rest-countries.jpg";
import { useState } from "react";

const ProjectSection = () => {
  const projects = [
    {
      title: "To-Do List",
      description:
        "The MERN stack to-do list app is an user-friendly application for managing tasks. Built with MongoDB, Express, React, and Node.js, it offers seamless integration, intuitive UI, task creation, updates, and deletion, data persistence, authentication, and various features to stay organized and boost productivity.",
      image: ToDoListImg,
      link: "https://to-do-list-by-advait-tumbre.netlify.app/",
    },
    {
      title: "Gym Chain",
      description:
        "At GymChain, we believe that fitness is for everyone, and we strive to create a welcoming and inclusive environment where people of all fitness levels can feel comfortable and supported. ",
      image: GymChain,
      link: "https://1199323-project.netlify.app/index.html",
    },
    {
      title: "Movie App",
      description:
        "The MERN stack movie app is a powerfull platform to manage movie data with CRUD operations. Built using MongoDB, Express, React, and Node.js, it provides a seamless user experience. Easily add, read, update, and delete movies. With intuitive UI, it's perfect for movie enthusiasts and critics.",
      image: MovieApp,
      link: "https://zenclass-movie-app.netlify.app/movies-section",
    },
    {
      title: "Blog by Advait",
      description:
        "This Blog App demonstrates my full-stack development skills and my passion for creating intuitive, responsive, and user-friendly web applications. Whether you are a blogger looking to share your thoughts and ideas or a reader looking to discover new content, this app provides an easy-to-use platform for both. ",
      image: Badvait,
      link: "https://blog-app-by-advait-tumbre.netlify.app/post/643d64efdff4358f876d84eb",
    },
    {
      title: "Calculator App",
      description:
        "The React based calculator app is a userfriendly application for making mathematical calculations. Developed using React framework, it provides an intuative interface with a variety of functions and operationals to solve math problems with ease.",
      image: CalculatorAppImg,
      link: "https://advaits-calculator-react-app.netlify.app/",
    },
    {
      title: "Dashboard Template",
      description:
        "The Dashbord Template Website is an amaizing templete built with React and Bootstrap, ideal for creating stunning dashboards. It offers a variety of pre-designed components and layouts, making it easy to customize and create visually appealing dashboards. Enhance your data visualization and analysis with this flexible and user-friendly templete, perfect for web developers and businesses.",
      image: DashBoard,
      link: "https://at-dashboard-app.netlify.app/",
    },
    {
      title: "Pagination",
      description:
        "Website that showcases the implementation of pagination feature. Designed with responsiveness in mind, it offers seamless browsing experience. Explore the content and navigate through pages effortlessly. Perfect for users looking to enhance their website's user interface.",
      image: Pagin,
      link: "https://devadvait-pagination.netlify.app",
    },
    {
      title: "REST Countries API",
      description:
        "The Website presents the implementation of the REST countries API using REACT and Bootstrap. It provides a seamless user experience, enabling visitors to explore comprehensive information about various countries. With its intuitive interface and responsive design, this platform offers a professional and informative resource for learning about diverse cultures, geography, and more. ",
      image: RestCount,
      link: "https://to-do-list-by-advait-tumbre.netlify.app/",
    },
    {
      title: "Pricing Table",
      description:
        "With its user-friendly interface, it allows you to easily compare features and select the best option for your needs. Enhances your website's design and attract customers with this flexible and eye-catchng component.",
      image: PricingTable,
      link: "https://to-do-list-by-advait-tumbre.netlify.app/",
    },

    // Add more projects here
  ];

  const [expandedProject, setExpandedProject] = useState(null);

  const toggleDescription = (index) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  return (
    <div className="container">
      <div className="row projects-wrapper">
        {projects.map((project, index) => (
          <div className="col-md-12" key={index}>
            <Card className="project-card">
              <div className="img-wrapper">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  className="img-fluid"
                />
              </div>
              <Card.Body>
                <Card.Title className="project-title">
                  {project.title}
                </Card.Title>
                <Card.Text className="project-description">
                  {expandedProject === index
                    ? project.description
                    : `${project.description.slice(0, 50)}...`}
                  <span
                    className="read-more"
                    onClick={() => toggleDescription(index)}
                  >
                    {expandedProject === index ? " Read less" : " Read more"}
                  </span>
                </Card.Text>
                <Button
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
