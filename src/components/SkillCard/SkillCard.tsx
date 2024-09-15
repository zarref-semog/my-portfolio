import { styled } from "@mui/material"
import { ReactNode } from "react"

interface SkillCardProps {
  children: ReactNode
}

const SkillCard: React.FC<SkillCardProps> = ({children}) => {

  const SkillCard = styled("div")(({ theme }) => ({
    backgroundColor: "transparent",
    border: "2px solid #E0E0E0",
    borderRadius: "5px",
    padding: "10px 15px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  }));
  

  return (
    <>
      <SkillCard>{children}</SkillCard>
    </>
  )
}

export default SkillCard
