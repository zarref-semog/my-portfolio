import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, GlobalStyles } from '@mui/material'
import App from './App.tsx'
import { ThemeProvider } from '@emotion/react'
import theme from "./theme.ts"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          "*": {
            userSelect: "none", // Desabilita a seleção de texto
          },
        }}
      />
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
