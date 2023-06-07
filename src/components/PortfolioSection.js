import { Element } from 'react-scroll'
import { Grid, Card, CardContent, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { CssBaseline } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    margin: theme.spacing(2, 0),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  img: {
    border: '3px solid black',
    clipPath: 'inset(3px)',
  },
}))

const portfolios = [
  {
    name: '쌈장님',
    url: 'https://unknownart.github.io/homepage/',
    img: 'image1.png',
  },
  {
    name: '배가님',
    url: 'https://vaga1529.github.io/homepage/',
    img: 'image2.png',
  },
  {
    name: '전지연님',
    url: 'https://jeonziyeon.github.io/homepage/',
    img: 'image3.png',
  },
  {
    name: '백종화님',
    url: 'https://powerstorm1014.github.io/homepage/',
    img: 'image4.png',
  },
  {
    name: '벨라님',
    url: 'https://bella777777.github.io/homepage/',
    img: 'image5.png',
  },
  {
    name: '진현용님',
    url: 'https://jayrin1004.github.io/homepage/',
    img: 'image6.png',
  },
  {
    name: 'Zohn님',
    url: 'https://ZohnNasse.github.io/page3',
    img: 'image7.png',
  },
  {
    name: '오세열님',
    url: 'https://seiyeolo.github.io/homepage/index.html',
    img: 'image8.png',
  },
  { name: 'JK님', url: 'https://jk2023-creator.github.io/', img: 'image9.png' },
  {
    name: 'sunny님',
    url: 'https://saturn26600.github.io/homepage/#',
    img: 'image10.png',
  },
]

function PortfolioSection() {
  const classes = useStyles()

  return (
    <Element name="portfolio" className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        <Box fontWeight="fontWeightBold">내 생에 첫 개발 - ChatGPT 코딩</Box>
      </Typography>
      <Grid container spacing={6}>
        {portfolios.map((portfolio, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6" align="center">
                  {portfolio.name}
                </Typography>
                <a
                  href={portfolio.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`/img/${portfolio.img}`}
                    alt={portfolio.name}
                    className={classes.img}
                    style={{ width: '100%' }}
                  />
                  <Typography variant="body2" align="center">
                    {portfolio.url}
                  </Typography>
                </a>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Element>
  )
}

export default PortfolioSection
