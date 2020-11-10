import React,{useState, useEffect} from 'react';
import './App.css';
import {Container, AppBar, 
  Typography, Button, 
  Box, Card, CardContent} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: '90%',
  },
  media: {
    height: 140,
  }
});

function App() {
  const[data, setData] = useState();
  const [author, setAuthor] = useState();
  const [quote, setQuote] = useState();

  const url = 'https://api.quotable.io/random';
  
  const getFetch =  async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
     setAuthor(data.author)
     setQuote(data.content);
    }
  

  useEffect(()=> {
    getFetch();
  },[0])

  const getQuote = () => {
      getFetch();
  }

  

const classes = useStyles();
  return (
    
    <>
      <Container mt={4}>
        <AppBar position="static">
          <Box textAlign="center" py={3} >
          <Typography style={{fontSize: '2em', fontWeight: 'bolder'}}>Random Quote Generator</Typography>
          </Box>
        </AppBar>

    <Box my={3} textAlign="center">
        <Card style={{margin: 'auto'}} className={classes.root}>
        <CardContent>
          <Typography style={{fontStyle: 'italic'}} gutterBottom variant="h6" component="h2">
            -- {author ? author : 'no author'} --
          </Typography>
          <Typography variant="h4" color="textSecondary" component="p">
          " {quote ? quote : 'no content'} "
          </Typography>
          <Button style={{marginTop: '1em'}} color="primary" variant="contained" onClick={getQuote}>Next Quote</Button>
        </CardContent>
         </Card>
        
    </Box>
       <AppBar position="static" style={{backgroundColor: '#333'}}>
          <Box textAlign="center" py={1} >
          <Typography style={{fontSize: '1em', fontStyle: "italic"}}>Created by Sujal lama.</Typography>
          </Box>
        </AppBar>
       
       </Container>
    </>
  );
}

export default App;
