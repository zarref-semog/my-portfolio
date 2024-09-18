import { Container, Stack, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ProjectCard } from "../../../../components/ProjectCard/ProjectCard";
import ShoppingCartProject from "../../../../assets/screenshots/shopping-cart-project.png"
import PokemonApiProject from "../../../../assets/screenshots/pokemon-api-project.png"
import KanbanProject from "../../../../assets/screenshots/kanban-project.png"
import MyClassroomProject from "../../../../assets/screenshots/my-classroom-project.png"

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
    { img: ShoppingCartProject, alt: "shopping-cart-project", title: "Shopping Cart", href: "https://www.github.com/zarref-semog/shopping-cart", description: "A React JS application that consumes a Mercado Livre API, and displays your products with a search function." },
    { img: PokemonApiProject, alt: "pokemon-api-project", title: "Pokemon", href: "https://www.github.com/zarref-semog/pokemon-api", description: "A React JS application that consumes a Pokemon API, and allows you to favorite them." },
    { img: KanbanProject, alt: "kanban-project", title: "Kanban", href: "https://github.com/zarref-semog/kanban", description: "A Vanilla JS application that allows you to manage tasks in a kanban board." },
    { img: MyClassroomProject, alt: "my-classroom-project", title: "My Classroom", href: "https://github.com/zarref-semog/my-classroom", description: "A React Native application for teachers where you can manage your classrooms." },
    { img: "", alt: "", title: "Parking Control", href: "https://github.com/zarref-semog/parking-control", description: "API for parking manage using Spring Boot and PostgreSQL." },
    { img: "", alt: "", title: "Day Notes", href: "https://github.com/zarref-semog/day-notes", description: "API for manage daily notes using ExpressJS and MySQL." },
    { img: "", alt: "", title: "Bitcoin Price", href: "https://github.com/zarref-semog/preco-bitcoin", description: "Flutter mobile application that shows the bitcoin price." },
    { img: "", alt: "", title: "Localiza", href: "https://github.com/zarref-semog/localiza", description: "API for car rental using ExpressJS and MongoDB." },
    { img: "", alt: "", title: "Tractian Challenge", href: "https://github.com/zarref-semog/tractian-challenge-flutter", description: "Flutter mobile application to visualize Asset Tree." },
    { img: "", alt: "", title: "Consultoria", href: "https://github.com/zarref-semog/consultoria", description: "Flutter mobile application for a fictional company." },
    { img: "", alt: "", title: "Jokenpo", href: "https://github.com/zarref-semog/jokenpo", description: "Flutter mobile application to play jokenpo." },
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
            </ProjectCard>
          ))}
        </Stack>
      </Container>
    </StyledProjects>
  );
};

export default Projects;
