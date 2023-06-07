import React from 'react'
import PortfolioSection from './components/PortfolioSection'
import ReviewsSection from './components/ReviewsSection'
import Footer from './components/Footer'
import { Container } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    background: {
      default:
        'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 33%, #fad0c4 66%, #ff9a9e 100%)',
    },
  },
  typography: {
    fontFamily: ['Dancing Script', 'cursive'].join(','),
  },
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <PortfolioSection />
          <ReviewsSection />
        </Container>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App
