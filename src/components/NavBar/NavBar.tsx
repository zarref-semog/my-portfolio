import { AppBar, MenuItem, styled, Toolbar, Link } from "@mui/material"

const NavBar = () => {

  const StyledToolBar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
  }))

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    event.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <AppBar position="absolute">
        <StyledToolBar>
          <MenuItem style={{width: "100%", justifyContent: "center"}}>
            <Link href="#about" color="inherit" underline="none" onClick={(e) => scrollToSection(e, 'about')}>
              About
            </Link>
          </MenuItem>
          <MenuItem style={{width: "100%", justifyContent: "center"}}>
            <Link href="#skills" color="inherit" underline="none" onClick={(e) => scrollToSection(e, 'skills')}>
              Skills
            </Link>
          </MenuItem>
          <MenuItem style={{width: "100%", justifyContent: "center"}}>
            <Link href="#projects" color="inherit" underline="none" onClick={(e) => scrollToSection(e, 'projects')}>
              Projects
            </Link>
          </MenuItem>
        </StyledToolBar>
      </AppBar>
    </>
  )
}

export default NavBar
