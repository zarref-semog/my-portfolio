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
      }, 30000); // Repete a cada 10 segundos
  
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

  return (
    <>
      <StyledAbout>
        <Container maxWidth="lg">
          <Typography id="about" color="black" variant="h2" textAlign="center" pb={2}>About Me</Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" alignItems={{ xs: "center"}}>
            <StyledCard>
              <WorkspacePremiumIcon />
              <Typography fontWeight="bold">Experience</Typography>
              <Typography>1+ years</Typography>
              <Typography>Full Stack Development</Typography>
            </StyledCard>
            <StyledCard>
              <SchoolIcon />
              <Typography fontWeight="bold">Education</Typography>
              <Typography>Bachelors Degree</Typography>
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
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={HTML} />HTML</SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={CSS} />CSS</SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={JS} />JavaScript</SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={TS} />TypeScript</SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={Dart} />Dart</SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={ReactJS} />ReactJS</SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={NextJS} />NextJS</SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={Git} />Git</SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={Flutter} />Flutter</SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={ReactJS} />React Native</SkillCard>
              <SkillCard><img height={'12px'} src={Axios} /></SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={Webhooks} />WebHooks</SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={NodeJS} />NodeJS</SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={Java} />Java</SkillCard>
              <SkillCard><img height={'24px'} src={C} /></SkillCard>
              <SkillCard><img height={'24px'} src={PHP} /></SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={Python} />Python</SkillCard>
              <SkillCard><img height={'12px'} style={{ marginRight: "5px"}} src={ExpressJS} />ExpressJS</SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={NestJS} />NestJS</SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={SpringBoot} />Spring Boot</SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={Laravel} />Laravel</SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={Websockets} />WebSocket</SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={JWT} />JWT</SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={API} />REST API</SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={Microservices} />Microservices</SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={GraphQL} />GraphQL</SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={MySQL} />MySQL</SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={Postgres} />PostgreSQL</SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={SQLite} />SQLite</SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={Mongo} />MongoDB</SkillCard>
              <SkillCard><img height={'60px'} style={{ marginRight: "5px"}} src={Redis} /></SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={Docker} />Docker</SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={Kubernetes} />Kubernetes</SkillCard>
              <SkillCard><img height={'24px'} style={{ marginRight: "5px"}} src={Godot} />Godot</SkillCard>
            </Stack>
          </StyledScrollbar>
          <Box height="40px" />
        </Container>
      </StyledAbout>
    </>
  )
}

export default About
