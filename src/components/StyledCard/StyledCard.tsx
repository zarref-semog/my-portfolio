import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledCardProps {
  children: ReactNode
}

const StyledCard: React.FC<StyledCardProps> = ({children}) => {

  const StyledCard = styled("div")(({theme}) => ({
    backgroundColor: "transparent",
    border: "2px solid #E0E0E0",
    borderRadius: "5px",
    padding: "10px 15px",
    width: "20%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "black",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  }))

  return (
    <>
      <StyledCard>{children}</StyledCard>
    </>
  )
}

export default StyledCard
