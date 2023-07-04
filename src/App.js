import React from 'react'
import PortfolioSection from './components/PortfolioSection'
import ChatAppSection from './components/ChatAppSection'
import ReviewsSection from './components/ReviewsSection'
import Footer from './components/Footer'
import { Container, CssBaseline } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: { main: '#ff9a9e' },
    secondary: { main: '#fad0c4' },
  },
  typography: {
    fontFamily: ['Noto Sans KR', 'sans-serif'].join(','),
  },
})

const useStyles = makeStyles({
  root: {
    background:
      'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 33%, #fad0c4 66%, #ff9a9e 100%)',
    minHeight: '100vh',
  },
})

function App() {
  const classes = useStyles()

  return (
    <div className={`${classes.root} App`}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <PortfolioSection />
          <ChatAppSection />
          <ReviewsSection />
        </Container>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App
