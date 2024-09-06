## AI Flashcards
This project is an AI flashcards application that generates 10 flashcards based on the topic the user requests for. It allows for multiple flashcard sets to be made. This can be used as a study/revision tool. The project uses Next.js as the frontend framework, Material UI for the UI components, Firebase as the backend service and OpenRouter API for intelligently generating flashcards. 

## Features
- Generate unlimited sets of flashcards on any topic. 

## How to deploy locally on your computer:

1. Clone this repository
   
2. Set up a new Firebase project on the Firebase console.
   
3. Create a .env file and add these environment variables to your .env file:
```sh
FIREBASE_API_KEY=YOUR_API_KEY
FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
FIREBASE_APP_ID=YOUR_APP_ID
OPENROUTER_API_KEY=YOUR_OPENROUTER_API_KEY
```
4. Replace the values using values from your Firebase project configuration and OpenRouter API account.

5. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.