'use client'
import {AppBar, Container, Toolbar, Typography, Button, Box, Grid} from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Create flashcard from your text" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>Flash Tutor</Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{textAlign: 'center', my: 4}}>
        <Typography variant="h2" gutterBottom>Welcome to Flash Tutor</Typography>
        <Typography variant="h5" gutterBottom>
          {''}
          The easiest way to make flashcards from your text
        </Typography>
        <Button variant="contained" color="primary" sx={{mt: 2}} onClick={() => (router.push('/generate'))}>Get Started</Button>
      </Box>
      <Box sx={{my: 6}}>
        <Typography variant="h4" gutterBottom>Features</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Easy Text Input</Typography>
            <Typography>
              {''}
              Simply input your text and let our software do the rest. Creating flashcards has never been easier.
              </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Smart Flashcards</Typography>
            <Typography>
              {''}
              Our AI intelligently breaks down your text into concise flashcards, perfect for studying.
              </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Accessible Anywhere</Typography>
            <Typography>
              {''}
              Access your flashcards from any device, at any time. Study on the go with ease.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
