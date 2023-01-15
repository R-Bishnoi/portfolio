import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/heart.png";
import emotion from "../../Assets/Projects/spam.png";
import editor from "../../Assets/Projects/recipe.png";
import chatify from "../../Assets/Projects/chat.png";
import bitsOfCode from "../../Assets/Projects/myenergy.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">

            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="gossipTube"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/R-Bishnoi/goosipTube"
              demoLink="https://github.com/R-Bishnoi/goosipTube/blob/main/README.md"
            />

          </Col>

          <Col md={4} className="project-card">

            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="EnergyTracker"
              description="This is an energy Tracker application which Track or measure the energy consumption by single application running on our system. Based on these data user can easily check any software application's power consumption. A good software Application Always consume minimum energy and give the maximum performance. Tech stack - python, psutil library etc."
              ghLink="https://github.com/R-Bishnoi/EnergyTracker"
              demoLink="https://github.com/R-Bishnoi/EnergyTracker/blob/main/Single_Application_power_consumption.ipynb"
            />

          </Col>

          <Col md={4} className="project-card">

            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Recipefy.com"
              description="Developed a React-based App where users can search for an optimal recipe for any kind of dish. It provides
              Information On the ingredients of the dish and the calory of that dish. users can also share their favorite recipes
              With others and also Add their local recipes so others can try them .
              Data fetching from Edamam Recipe Search API and integrate into this web application.
              It is Built by using HTML, CSS, javascript, reactjs, and materiaUi (React component library) ."
              ghLink="https://github.com/R-Bishnoi/Recipefy.com"
              demoLink="https://github.com/R-Bishnoi/Recipefy.com/blob/main/README.md"              
            />
   
          </Col>

          <Col md={4} className="project-card">

            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="DISEASE DETECTOR"
              description="Developed a ML based disease detector where user can input some general information like (blood group ,
                Gender etc) and get the disease report. which effectively predict either the patient suffers from disease or not.
                The efficiency of the model was upto 87%.Used logistic regression machine learning algorithm for prediction and for training this model a proper data
                Set taken from kaggle. | Python,numpy,pandas,sklearn,seaborn,matplotlib"
              ghLink="https://github.com/R-Bishnoi/Heart-Disease-Prediction-Ml-Project"
              demoLink="https://github.com/R-Bishnoi/Heart-Disease-Prediction-Ml-Project/blob/main/Project-2%20(heart_disease).ipynb"
            />

          </Col>

          <Col md={4} className="project-card">

            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="SPAM FILTER"
              description="Build an ML-based Spam Filter in which the user input the received mail and knothe w whether it is ham
              or spam mail .ham mail send to the inbox folder and spam mail to the spam folder so that the user get all
              important mail In the inbox and other fraud or less important mail in to the spam folder.This Model is made using Logistic Regression Classifier and CountVectorizer used to convert text
              Data into number data | Python,NumPy, pandas ,sklearn."

              ghLink="https://github.com/R-Bishnoi/spam-filtering-"
            />

          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
