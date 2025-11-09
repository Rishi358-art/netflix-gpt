import { GoogleGenAI } from '@google/genai';
// Assuming ./constants.js or ./constants.ts exports the key string directly
import { GEMINI_API_KEY } from './constants'; 

// 1. Assign the string value directly, without curly braces.
const MY_KEY = GEMINI_API_KEY; 

// 2. Pass the string variable to the apiKey property.
const ai = new GoogleGenAI({ apiKey: MY_KEY });

export default ai;