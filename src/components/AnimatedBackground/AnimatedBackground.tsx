import { styled, keyframes } from "@mui/system";

// Funções de animação
const animateStars = keyframes`
  0% { transform: rotate3d(-1, 1, 0, 0deg); }
  25% { transform: rotate3d(-1, 1, 0, 30deg); }
  50% { transform: rotate3d(-1, 1, 0, 0deg); }
  75% { transform: rotate3d(-1, 1, 0, -30deg); }
  100% { transform: rotate3d(-1, 1, 0, 0deg); }
`;

// Função para gerar estrelas
const generateStars = (n: number) => {
  let value = `${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`;
  for (let i = 2; i <= n; i++) {
    value += `, ${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`;
  }
  return value;
};

// Estilos para o contêiner de estrelas
const StarsContainer = styled("div")({
  height: "200vh",
  width: "200%",
  background: "radial-gradient(ellipse at bottom, #1B2735 0%, #191F24 100%)",
  position: "relative",
  overflow: "hidden",
  transform: "translate(-50%, -50%)",
});

// Estilos para as estrelas de tamanhos diferentes
const Stars = styled("div")(({ size }: { size: string }) => ({
  width: size,
  height: size,
  background: "transparent",
  boxShadow: size === "1px" ? generateStars(700) : size === "2px" ? generateStars(200) : generateStars(100),
  borderRadius: "50%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  animation: `${animateStars} ${size === "1px" ? "28.5s" : size === "2px" ? "30s" : "31.5s"} ease-in-out infinite`,
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: size,
    height: size,
    background: "transparent",
    boxShadow: size === "1px" ? generateStars(700) : size === "2px" ? generateStars(200) : generateStars(100),
    borderRadius: "50%",
  },
}));

const AnimatedBackground = () => {
  return (
    <StarsContainer>
      <Stars size="1px" id="stars" />
      <Stars size="2px" id="stars2" />
      <Stars size="3px" id="stars3" />
    </StarsContainer>
  );
};

export default AnimatedBackground;
