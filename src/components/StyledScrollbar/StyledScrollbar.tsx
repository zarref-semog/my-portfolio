import { forwardRef, ReactNode } from "react"
import { styled } from "@mui/system"

interface StyledScrollbarProps {
  children: ReactNode
}

const StyledScrollbar = forwardRef<HTMLDivElement, StyledScrollbarProps>(
  ({ children }, ref) => {
    const StyledScrollbarContainer = styled("div")({
      marginBottom: "10px",
      paddingBottom: "10px",
      overflow: "auto",
      "&::-webkit-scrollbar": {
        width: "8px",
        height: "8px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#8e8e8e",
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "lightgray",
        borderRadius: "10px",
      },
    })

    return (
      <StyledScrollbarContainer ref={ref}>
        {children}
      </StyledScrollbarContainer>
    )
  }
)

export default StyledScrollbar
