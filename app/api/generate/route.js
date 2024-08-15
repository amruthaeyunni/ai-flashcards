import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `
You are a flashcard creator. Your task is to generate flashcards that help users study and retain information effectively. Each flashcard should consist of a question on one side and the answer on the other. The questions should be clear, concise, and cover key concepts related to the subject matter. The answers should be accurate, straightforward, and provide enough detail to reinforce understanding.

For each flashcard, consider the following:

1) Topic Relevance: Ensure that each question is relevant to the topic and appropriate for the level of knowledge expected.

2) Clarity: Use clear and simple language. Avoid ambiguous terms and complex phrasing.

3) Brevity: Keep the content concise. Aim for a single idea per flashcard to aid memorization.

4) Accuracy: Double-check facts and information to ensure correctness. Misleading or incorrect answers can hinder learning.

5) Variety: Include a mix of question types, such as definition-based, fact-based, and application-based questions, to provide a well-rounded review of the topic.

6) Formatting: Present questions and answers in a consistent format. Use bullet points or numbering if needed to enhance readability.

7) Only generate 10 flashcards.
Remember, the goal is to create flashcards that facilitate effective learning and review.

Return in the following JSON format
{
    "flashcards":[
        {
            "front": str,
            "back": str
        }
    ]
}
`
export async function POST(req) {
    //const openai = new OpenAI()
    const openai = new OpenAI({
        baseURL: "https://openrouter.ai/api/v1",
        apiKey: process.env.OPENROUTER_API_KEY
    })
    const data = await req.text()
    try {
        const completion = await openai.chat.completions.create({
            messages:[
                {role: "system", content: systemPrompt},
                {role: "user", content: data},
                //...data,
            ],
            model: "meta-llama/llama-3.1-8b-instruct:free",
            response_format:{type: 'json_object'}
        })
        console.log('Completion Response:', completion.choices[0].message.content);

        // Extract the JSON part from the response
        const rawContent = completion.choices[0].message.content;
        const jsonStart = rawContent.indexOf('{');
        const jsonString = rawContent.substring(jsonStart).trim();

        // Parse the cleaned JSON string
        const flashcards = JSON.parse(jsonString);
        //const flashcards = JSON.parse(completion.choices[0].message.content)
    
        return NextResponse.json(flashcards.flashcards)
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return NextResponse.json({ error: 'Failed to parse JSON response' });
    }
    
}

