import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "CareerSense-AI",
    name:"CareerSense-AI",
    credentials: {
        gemini: {
            apikey: process.env.GEMINI_API_KEY,
        }
    }
 });