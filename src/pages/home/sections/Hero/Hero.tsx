import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from "@mui/icons-material/Download"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import StyledButton from "../../../../components/StyledButton/StyledButton"
import AnimatedBackground from "../../../../components/AnimatedBackground/AnimatedBackground"

const Hero = () => {

  const StyledHero = styled("div")(() => ({
    backgroundColor: "transparent",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    position: "relative",  // Para permitir que o background seja posicionado corretamente
    overflow: "hidden",  // Evitar overflow indesejado do fundo animado
  }))

  const StyledImg = styled("img")(({ theme }) => ({
    width: "60%",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.primary.contrastText}`
  }))

  return (
    <>
      <StyledHero>
        {/* Plano de fundo animado cobrindo todo o conteúdo */}
        <Box position="absolute" top={0} left={0} width="100%" height="100%" zIndex={-1}>
          <AnimatedBackground />
        </Box>

        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative" textAlign="center">
                <StyledImg src={Avatar} />
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>
                Murilo Gomes Ferraz
              </Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign="center">
                I'm a Software Engineer
              </Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton>
                    <MailOutlineIcon />
                    <Typography>Contact Me</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero
