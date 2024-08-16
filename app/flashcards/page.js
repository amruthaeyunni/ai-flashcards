'use client'
//import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { collection, doc, getDoc, setDoc, getDocs} from "firebase/firestore"
import { db } from "@/firebase"
import { useRouter } from "next/navigation"
import { Card, CardActionArea, CardContent, Container, Grid, Typography, Button, Box} from "@mui/material"

export default function Flashcards() {
    //const {isLoaded, isSignedIn, user} = useUser()
    //const [flashcards, setFlashcards] = useState([])
    const [flashcards, setFlashcards] = useState([])
    const router = useRouter()

    /*useEffect(() => {
        async function getFlashcards() {
            if (!user) return
            const docRef = doc(collection(db, 'users'), user.id)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                const collections = docSnap.data().flashcards || []
                console.log(collections)
                setFlashcards(collections)
            }
            else {
                await setDoc(docRef, {flashcards: []})
            }
        }
        getFlashcards()
    }, [user])*/

    useEffect(() => {
        async function fetchFlashcardSets() {
            try {
                // Access the 'flashcards' collection
                const colRef = collection(db, 'flashcards')
                const snapshot = await getDocs(colRef)

                const collections = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))

                console.log('Fetched flashcard sets:', collections)  // Debug log
                setFlashcards(collections)
            } catch (error) {
                console.error('Error fetching flashcard sets:', error)
            }
        }

        fetchFlashcardSets()
    }, [])


    /*if (!isLoaded || !isSignedIn) {
        return <></>
    }*/

    const handleCardClick = (id) => {
      router.push(`/flashcard?id=${id}`)
    }

    return (
      <Container maxWidth="100vw">
        <Box sx={{textAlign: 'center', my: 4,}}>
          <Typography variant="h3" textAlign="center" sx={{mt: 5}}>
              Your Flashcard Sets
           </Typography>
          </Box>
        <Grid container spacing={3} sx={{mt: 4}}>
          {flashcards.map((flashcard, index) => (
            <Grid item sx={12} sm={6} md={4} key={index}>
              <Card>
                <CardActionArea onClick={() => {handleCardClick(flashcard.id)}}>
                  <CardContent>
                    <Typography variant="h6">{flashcard.name}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{textAlign: 'center', my: 4}}>
          <Button 
            variant="contained" 
            color="primary" 
            sx={{mt: 2, mr: 10, p: 2}} 
            onClick={() => (router.push('/generate'))}
          >
            New
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            sx={{mt: 2, p: 2}} 
            onClick={() => (router.push('/'))}
          >
            Home
          </Button>
        </Box>
      </Container>
    )
}