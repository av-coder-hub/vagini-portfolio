import React from 'react';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../index.css';


const projects = [
  {
    title: 'Global Kin',
    description: 'Developed a trip planning platform using Spring Boot, ReactJS, and MongoDB, integrating OpenStreetMap API for interactive map exploration.',
    link: 'https://github.com/av-coder-hub/petiteFrance',
    duration: 'Nov 2024 - Jan 2025',
  },
  {
    title: 'Task Tracker',
    description: 'Created a task manager app with full CRUD operations using PHP and MySQL. Users can create, edit, and complete tasks by date and time with a clean and responsive interface.',
    link: 'https://github.com/av-coder-hub/task-tracker',
    duration: 'Apr 2025',
  },
  {
    title: 'Contact Manager',
    description: 'Built a contact management system using PHP and MySQL. Users can add, edit, delete, and search for contacts with a sleek UI and persistent data storage.',
    link: 'https://github.com/av-coder-hub/contact-manager-app.git',
    duration: 'Apr 2025',
  },
  {
    title: 'Fest Flow',
    description: 'Built FestFlow, an event management system using Spring Boot and MySQL, enabling seamless event planning, attendee management, and real-time registration updates.',
    link: 'https://github.com/av-coder-hub/FestFlow',
    duration: 'Jan 2025 - Feb 2025',
  },
  {
    title: 'MEDTrack',
    description: 'MEDTrack, a Spring Boot, Security, and MySQL-powered hospital management system, facilitates seamless appointment scheduling, patient management, and secure authentication.',
    link: 'https://github.com/av-coder-hub/hospitalmanagement',
    duration: 'Jan 2025 - Feb 2025',
  },
  {
    title: 'OrderSync',
    description: 'Developed "OrderSync", a Spring Boot, MySQL-powered system with Thymeleaf and Bootstrap, ensuring seamless front-end and back-end integration with real-time updates.',
    link: 'Contributed',
    duration: 'Jan 2025',
  },
];

export default function Portfolio() {
  return (
    <Container className="my-5">
      <h1 className="text-center">Ananda Vagini A</h1>
      <p className="text-center">Aspiring Full Stack Developer | Puducherry, India</p>

      <div className="text-center mb-4">
        <a href="mailto:vaginipy97@gmail.com"><Button className="m-1">Email</Button></a>
        <a href="https://github.com/av-coder-hub" target="_blank" rel="noreferrer">
          <Button className="m-1" variant="outline-dark"><FaGithub /> GitHub</Button>
        </a>
        <a href="https://www.linkedin.com/in/vaginialagarsamy" target="_blank" rel="noreferrer">
          <Button className="m-1" variant="outline-primary"><FaLinkedin /> LinkedIn</Button>
        </a>
      </div>

      <h2>Skills</h2>
      <div className="text-left">
        <ul>
          <li><strong>Languages:</strong> Java, Python, JavaScript, PHP</li>
          <li><strong>Frameworks:</strong> Spring Boot, JUnit, Hibernate, JDBC, OpenStreetMap, Axios, React.js, React Router, Tailwind CSS, Security, REST API, Leaflet.js, Node.js, Thymeleaf, Bootstrap</li>
          <li><strong>Database:</strong> MySQL, MongoDB</li>
          <li><strong>Tools:</strong> Git, Eclipse, VS Code, Postman, Orange, Tableau, Octoparse, SheetGPT, Google Colab, AutoCAD, STAADPro, ETABS, Linux, Apache, Apache Solr (FOP)</li>
        </ul>
      </div>

      <h2 className="mt-4">Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col sm={12} md={6} key={index}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary">View on GitHub</Button>
                </a>
                <p className="text-muted mt-2">{project.duration}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h2 className="mt-4">Certifications</h2>
      <div className="text-left">
        <ul>
          <li>Java (Basic) - HackerRank</li>
          <li>Python (Basic) - HackerRank</li>
          <li>SQL (Intermediate) - HackerRank</li>
          <li>React Developer - HackerRank</li>
          <li>Full Stack Java Developer - Career Craft Academy</li>
        </ul>
      </div>

      <h2 className="mt-4">Education</h2>
      <div className="text-left">
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>B.Tech Civil Engineering</Card.Title>
            <Card.Subtitle className="text-muted">Christ College of Engineering, Puducherry</Card.Subtitle>
            <Card.Text>Aug 2014 - May 2018 | CGPA: 8.47</Card.Text>
          </Card.Body>
        </Card>
      </div>

      <h2 className="mt-4">Work Experience (Civil Engineering)</h2>
      <div className="text-left">
        {[ 
          {
            title: 'Apex Construction',
            role: 'Quantity Surveyor | Coimbatore | Mar 2022 - Mar 2023',
            desc: 'Managed project cost estimates, budgets, and bills for construction projects.',
          },
          {
            title: 'Star Builders',
            role: 'Structural Designer | Puducherry | Feb 2021 - Feb 2022',
            desc: 'Designed structures and ensured regulatory compliance.',
          },
          {
            title: 'REYDS Trust',
            role: 'Soil & Water Conservator | Dindigul | Jul 2019 - Jan 2021',
            desc: 'Worked under Ministry of Foreign Affairs, Japan project and implemented sustainable soil and water conservation methods in agriculture.',
          },
          {
            title: 'La Mere Construction',
            role: 'Junior Structural Engineer | Puducherry | Jan 2019 - Jun 2019',
            desc: 'Assisted with residential project design and site coordination.',
          },
        ].map((exp, i) => (
          <Card className="mb-3" key={i}>
            <Card.Body>
              <Card.Title>{exp.title}</Card.Title>
              <Card.Subtitle className="text-muted">{exp.role}</Card.Subtitle>
              <Card.Text>{exp.desc}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}
