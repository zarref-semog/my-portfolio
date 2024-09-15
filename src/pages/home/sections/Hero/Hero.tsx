import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import AnimatedBackground from "../../../../components/AnimatedBackground/AnimatedBackground";
import Currilo from "../../../../assets/others/curriculo-murilo.pdf";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "transparent",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "60%",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.primary.contrastText}`,
  }));

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Currilo;
    link.download = "curriculo-murilo.pdf"; // Nome do arquivo para download
    link.click();
  };

  return (
    <>
      <StyledHero>
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
                  <StyledButton onClick={handleDownload}>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={() => (window.location.href = "mailto:murilogf012@gmail.com")}>
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
  );
};

export default Hero;
