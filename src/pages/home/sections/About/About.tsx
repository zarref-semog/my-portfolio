import { Container, Stack, styled, Typography, Divider, Box } from "@mui/material";
import React from "react";
import StyledCard from "../../../../components/StyledCard/StyledCard"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import SkillCard from "../../../../components/SkillCard/SkillCard";
import StyledScrollbar from "../../../../components/StyledScrollbar/StyledScrollbar";
import HTML from "../../../../assets/images/html-icon.png";
import CSS from "../../../../assets/images/css-icon.png";
import JS from "../../../../assets/images/javascript-programming-language-icon.png";
import TS from "../../../../assets/images/typescript-programming-language-icon.png";
import Dart from "../../../../assets/images/dart-programming-language-icon.png";
import ReactJS from "../../../../assets/images/react-js-icon.png";
import NextJS from "../../../../assets/images/nextjs-icon.png";
import API from "../../../../assets/images/api-icon.png";
import Axios from "../../../../assets/images/axios-icon.png";
import SpringBoot from "../../../../assets/images/spring-boot-icon.png";
import JWT from "../../../../assets/images/jwt-icon.png";
import Websockets from "../../../../assets/images/websocket-icon.png";
import SQLite from "../../../../assets/images/sqlite-icon.png";
import C from "../../../../assets/images/c-language-icon.png";
import Godot from "../../../../assets/images/godot-icon.png";
import Webhooks from "../../../../assets/images/webhooks-icon.png";
import Microservices from "../../../../assets/images/microservice-icon.png";
import Git from "../../../../assets/images/git-icon.png";
import Flutter from "../../../../assets/images/flutter-icon.png";
import NodeJS from "../../../../assets/images/node-js-icon.png";
import Java from "../../../../assets/images/java-programming-language-icon.png";
import PHP from "../../../../assets/images/php-programming-language-icon.png";
import Python from "../../../../assets/images/python-programming-language-icon.png";
import ExpressJS from "../../../../assets/images/express-js-icon.png";
import NestJS from "../../../../assets/images/nest-js-icon.png";
import Laravel from "../../../../assets/images/laravel-icon.png";
import GraphQL from "../../../../assets/images/graphql-icon.png";
import MySQL from "../../../../assets/images/mysql-icon.png";
import Postgres from "../../../../assets/images/postgresql-icon.png";
import Mongo from "../../../../assets/images/mongodb-icon.png";
import Redis from "../../../../assets/images/redis-icon.png";
import Docker from "../../../../assets/images/docker-icon.png";
import Kubernetes from "../../../../assets/images/kubernetes-icon.png";
import RabbitMQ from "../../../../assets/images/rabbitmq-icon.png";
import CSharp from "../../../../assets/images/c-sharp-c-logo-02F17714BA-seeklogo.com.png";
import ASPNet from "../../../../assets/images/aspnet.png";

const About = () => {
  const stackRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (stackRef.current) {
      const scrollInterval = setInterval(() => {
        // Rola para a direita
        stackRef.current?.scrollTo({
          left: stackRef.current.scrollWidth,
          behavior: "smooth",
        });

        // Após 5 segundos (metade do intervalo), rola de volta para a esquerda
        setTimeout(() => {
          stackRef.current?.scrollTo({
            left: 0, // Volta para a esquerda
            behavior: "smooth",
          });
        }, 5000); // 5 segundos para completar a rolagem para a direita
      }, 60000); // Repete a cada 10 segundos

      // Cleanup para limpar o intervalo quando o componente desmontar
      return () => clearInterval(scrollInterval);
    }
  }, []);

  const StyledAbout = styled("div")(() => ({
    backgroundColor: "white",
    height: "auto",
    display: "flex",
    alignItems: "top",
    paddingTop: "30px",
  }))

  const skills = [
    { src: HTML, text: "HTML", height: "24px" },
    { src: CSS, text: "CSS", height: "24px" },
    { src: JS, text: "JavaScript", height: "24px" },
    { src: TS, text: "TypeScript", height: "24px" },
    { src: Dart, text: "Dart", height: "24px" },
    { src: ReactJS, text: "ReactJS", height: "24px" },
    { src: NextJS, text: "NextJS", height: "24px" },
    { src: Git, text: "Git", height: "24px" },
    { src: Flutter, text: "Flutter", height: "24px" },
    { src: ReactJS, text: "React Native", height: "24px" },
    { src: Axios, text: "", height: "12px" },
    { src: Webhooks, text: "WebHooks", height: "24px" },
    { src: NodeJS, text: "NodeJS", height: "24px" },
    { src: CSharp, text: "", height: "12px" },
    { src: Java, text: "Java", height: "24px" },
    { src: C, text: "", height: "24px" },
    { src: PHP, text: "", height: "24px" },
    { src: Python, text: "Python", height: "24px" },
    { src: ExpressJS, text: "ExpressJS", height: "24px" },
    { src: NestJS, text: "NestJS", height: "24px" },
    { src: ASPNet, text: "ASP.NET", height: "24px" },
    { src: SpringBoot, text: "Spring Boot", height: "24px" },
    { src: Laravel, text: "Laravel", height: "24px" },
    { src: Websockets, text: "WebSocket", height: "24px" },
    { src: JWT, text: "JWT", height: "24px" },
    { src: API, text: "REST API", height: "24px" },
    { src: Microservices, text: "Microservices", height: "24px" },
    { src: RabbitMQ, text: "", height: "12px" },
    { src: GraphQL, text: "GraphQL", height: "24px" },
    { src: MySQL, text: "", height: "36px" },
    { src: Postgres, text: "PostgreSQL", height: "24px" },
    { src: SQLite, text: "SQLite", height: "24px" },
    { src: Mongo, text: "MongoDB", height: "24px" },
    { src: Redis, text: "", height: "60px" },
    { src: Docker, text: "Docker", height: "24px" },
    { src: Kubernetes, text: "Kubernetes", height: "24px" },
    { src: Godot, text: "Godot", height: "24px" }
  ];


  return (
    <>
      <StyledAbout>
        <Container maxWidth="lg">
          <Typography id="about" color="black" variant="h2" textAlign="center" pb={2}>About Me</Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" alignItems={{ xs: "center" }}>
            <StyledCard>
              <WorkspacePremiumIcon />
              <Typography fontWeight="bold">Experience</Typography>
              <Typography>1+ years</Typography>
              <Typography>Full Stack Development</Typography>
            </StyledCard>
            <StyledCard>
              <SchoolIcon />
              <Typography fontWeight="bold">Education</Typography>
              <Typography>Bachelor's Degree</Typography>
              <Typography>Software Engineer</Typography>
            </StyledCard>
          </Stack>
          <Typography mt="40px" mb="20px" fontSize="18px">
            I am a software engineer with 2 years of experience in developing web and mobile applications,
            possessing a solid understanding of various technologies.
            I am involved in all stages of the software development process,
            from requirements gathering to deployment. With strong communication skills,
            a collaborative spirit, and a passion for learning and sharing knowledge,
            I am committed to delivering high-quality solutions.
          </Typography>
          <Divider variant="fullWidth" sx={{ borderBottomWidth: 4 }} />
          <Typography id="skills" variant="h2" textAlign="center" mt="20px" mb="20px">Skills</Typography>
          <StyledScrollbar ref={stackRef}>
            <Stack spacing={1} direction="row" style={{ scrollbarColor: "blue" }}>
              {skills.map((skill, index) => (
                <SkillCard key={index}>
                  <img
                    height={skill.height}
                    style={{ marginRight: skill.text ? "5px" : "0" }} // Aplica 5px apenas se houver texto
                    src={skill.src}
                    alt={skill.text}
                  />
                  {skill.text}
                </SkillCard>
              ))}
            </Stack>
          </StyledScrollbar>
          <Box height="40px" />
        </Container>
      </StyledAbout>
    </>
  )
}

export default About
