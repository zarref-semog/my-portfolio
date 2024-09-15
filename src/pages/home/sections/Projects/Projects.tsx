import { Container, styled, Typography } from "@mui/material"

const Projects = () => {

  const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
  }))

  return (
    <>
      <StyledProjects>
        <Container maxWidth="lg">
          <Typography id="projects" variant="h1" color="white">Projects</Typography>
        </Container>
      </StyledProjects>
    </>
  )
}

export default Projects
