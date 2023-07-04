import { Element } from 'react-scroll'
import { Grid, Card, CardContent, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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

const chatApps = [
  {
    name: '전지연님',
    url: 'https://www.plantbot.shop',
    img: 'chat1.png',
  },
  {
    name: '백종화님',
    url: 'https://www.empathbot.store/',
    img: 'chat2.png',
  },
  {
    name: 'Zohn님',
    url: 'https://testchatbot-five.vercel.app/',
    img: 'chat3.png',
  },
  {
    name: '써니님',
    url: 'https://style-me-td.vercel.app/',
    img: 'chat4.png',
  },
  {
    name: 'JK님',
    url: 'https://wowdogs.vercel.app/',
    img: 'chat5.png',
  },
]

function ChatAppSection() {
  const classes = useStyles()

  return (
    <Element name="chatApp" className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        <Box
          fontWeight="fontWeightBold"
          style={{ marginTop: 40, fontSize: 30 }}
        >
          나만의 채팅 앱 만들기
        </Box>
      </Typography>
      <Grid container spacing={6}>
        {chatApps.map((chatApp, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6" align="center">
                  {chatApp.name}
                </Typography>
                <a href={chatApp.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={process.env.PUBLIC_URL + '/img/' + chatApp.img}
                    alt={chatApp.name}
                    className={classes.img}
                    style={{ width: '100%' }}
                  />
                  <Typography variant="body2" align="center">
                    {chatApp.url}
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

export default ChatAppSection
