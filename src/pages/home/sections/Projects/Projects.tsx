import { Container, Stack, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ProjectCard } from "../../../../components/ProjectCard/ProjectCard";
import ShoppingCartProject from "../../../../assets/screenshots/shopping-cart-project.png"
import PokemonApiProject from "../../../../assets/screenshots/pokemon-api-project.png"
import KanbanProject from "../../../../assets/screenshots/kanban-project.png"
import MyClassroomProject from "../../../../assets/screenshots/my-classroom-project.png"
import HTML from "../../../../assets/images/html-icon.png";
import CSS from "../../../../assets/images/css-icon.png";
import JS from "../../../../assets/images/javascript-programming-language-icon.png";
// import TS from "../../../../assets/images/typescript-programming-language-icon.png";
import Dart from "../../../../assets/images/dart-programming-language-icon.png";
import ReactJS from "../../../../assets/images/react-js-icon.png";
// import NextJS from "../../../../assets/images/nextjs-icon.png";
import API from "../../../../assets/images/api-icon.png";
// import Axios from "../../../../assets/images/axios-icon.png";
import SpringBoot from "../../../../assets/images/spring-boot-icon.png";
// import JWT from "../../../../assets/images/jwt-icon.png";
// import Websockets from "../../../../assets/images/websocket-icon.png";
import SQLite from "../../../../assets/images/sqlite-icon.png";
// import C from "../../../../assets/images/c-language-icon.png";
// import Godot from "../../../../assets/images/godot-icon.png";
// import Webhooks from "../../../../assets/images/webhooks-icon.png";
// import Microservices from "../../../../assets/images/microservice-icon.png";
// import Git from "../../../../assets/images/git-icon.png";
import Flutter from "../../../../assets/images/flutter-icon.png";
import NodeJS from "../../../../assets/images/node-js-icon.png";
import Java from "../../../../assets/images/java-programming-language-icon.png";
// import PHP from "../../../../assets/images/php-programming-language-icon.png";
// import Python from "../../../../assets/images/python-programming-language-icon.png";
import ExpressJS from "../../../../assets/images/express-js-icon.png";
// import NestJS from "../../../../assets/images/nest-js-icon.png";
// import Laravel from "../../../../assets/images/laravel-icon.png";
// import GraphQL from "../../../../assets/images/graphql-icon.png";
import MySQL from "../../../../assets/images/mysql-icon.png";
import Postgres from "../../../../assets/images/postgresql-icon.png";
import Mongo from "../../../../assets/images/mongodb-icon.png";
// import Redis from "../../../../assets/images/redis-icon.png";
// import Docker from "../../../../assets/images/docker-icon.png";
// import Kubernetes from "../../../../assets/images/kubernetes-icon.png";
// import RabbitMQ from "../../../../assets/images/rabbitmq-icon.png";

const Projects = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

  const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "auto",
    display: "flex",
    alignItems: "center",
  }));

  // Definir os projetos
  const projects = [
    { img: MyClassroomProject, alt: "my-classroom-project", title: "My Classroom", href: "https://github.com/zarref-semog/my-classroom", description: "A React Native application for teachers where you can manage your classrooms.", technologies: [JS, ReactJS, SQLite] },
    { img: ShoppingCartProject, alt: "shopping-cart-project", title: "Shopping Cart", href: "https://www.github.com/zarref-semog/shopping-cart", description: "A React JS application that consumes a Mercado Livre API, and displays your products with a search function.", technologies: [HTML, CSS, JS, ReactJS, API] },
    { img: PokemonApiProject, alt: "pokemon-api-project", title: "Pokemon", href: "https://www.github.com/zarref-semog/pokemon-api", description: "A React JS application that consumes a Pokemon API, and allows you to favorite them.", technologies: [HTML, CSS, JS, ReactJS, API] },
    { img: KanbanProject, alt: "kanban-project", title: "Kanban", href: "https://github.com/zarref-semog/kanban", description: "A Vanilla JS application that allows you to manage tasks in a kanban board.", technologies: [HTML, CSS, JS] },
    { img: "", alt: "", title: "Tractian Challenge", href: "https://github.com/zarref-semog/tractian-challenge-flutter", description: "Flutter mobile application to visualize Asset Tree.", technologies: [Dart, Flutter, API] },
    { img: "", alt: "", title: "Parking Control", href: "https://github.com/zarref-semog/parking-control", description: "API for parking manage using Spring Boot and PostgreSQL.", technologies: [Java, SpringBoot, Postgres, API] },
    { img: "", alt: "", title: "Day Notes", href: "https://github.com/zarref-semog/day-notes", description: "API for manage daily notes using ExpressJS and MySQL.", technologies: [JS, NodeJS, ExpressJS, MySQL, API] },
    { img: "", alt: "", title: "Bitcoin Price", href: "https://github.com/zarref-semog/preco-bitcoin", description: "Flutter mobile application that shows the bitcoin price.", technologies: [Dart, Flutter, API] },
    { img: "", alt: "", title: "Localiza", href: "https://github.com/zarref-semog/localiza", description: "API for car rental using ExpressJS and MongoDB.", technologies: [JS, NodeJS, ExpressJS, Mongo, API] },
    { img: "", alt: "", title: "Consultoria", href: "https://github.com/zarref-semog/consultoria", description: "Flutter mobile application for a fictional company.", technologies: [Dart, Flutter] },
    { img: "", alt: "", title: "User API Postgres", href: "https://github.com/zarref-semog/node-postgres", description: "API for manage users using ExpressJS and PostgreSQL.", technologies: [NodeJS, ExpressJS, Postgres] },
    { img: "", alt: "", title: "User API MySQL", href: "https://github.com/zarref-semog/node-mysql", description: "API for manage users using ExpressJS and MySQL.", technologies: [NodeJS, ExpressJS, MySQL] },
  ];

  return (
    <StyledProjects>
      <Container maxWidth="lg">
        <Typography id="projects" variant="h2" color="white" textAlign="center" marginTop="40px" marginBottom="40px">Projects</Typography>
        <Stack
          direction={isSmallScreen ? "column" : "row"} // Muda a direção com base no tamanho da tela
          display="flex"
          flexWrap="wrap"
          justifyContent="space-evenly"
          width="100%"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} img={project.img} alt={project.alt} title={project.title} href={project.href}>
              {project.description}
              <div style={{marginTop: '10px'}}>
                {project.technologies.map(t => <img src={t} width={'auto'} height={'24px'} style={{marginRight: '10px'}} />)}
              </div>
            </ProjectCard>
          ))}
        </Stack>
      </Container>
    </StyledProjects>
  );
};

export default Projects;
